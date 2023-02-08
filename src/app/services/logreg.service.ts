import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cliente } from '../models/cliente';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class LogregService {

  private currentUserSubject: BehaviorSubject<Cliente>;


  constructor(private httpClient:HttpClient,private router:Router, private crypto:CryptoService) {
    this.currentUserSubject = new BehaviorSubject<Cliente>(JSON.parse(localStorage.getItem('user')||'{}'));

   }

  login(login:FormGroup):Observable<boolean>{


    //pkey aleatorio longitud 
    const pkey:string = this.crypto.getRandomString(16);
    const iv:string = this.crypto.getRandomString(16);
    const values = pkey + '.'+iv;

    const { eou, password } = login.getRawValue();
    //guarda en data la encriptacion del email y password con cifrado AES-CBC
    const data:string = this.crypto.encryptJson({eou:eou,password:password},pkey,iv);
    const s:string = this.crypto.encryptSecret(values);
    const signature:string = this.crypto.signEncrypted(data);
    const loginData = new FormData();

    loginData.append('data',data);
    loginData.append('s',s);
    loginData.append('sign',signature);


    /**
     * formato de la peticion HTTP POST
     * <parametro>
     */
    return this.httpClient.post<Cliente>(environment.url_login,loginData,{observe:'response'}).pipe(map(response=>{
      if(response.status === 200){ 
        this.setLocalStorageUser(response.body!);
        return true;
      }

      return false;

    }),catchError(this.handleError<any>('login')));

  }

  register(register:FormGroup):Observable<object>{

    const pkey:string = this.crypto.getRandomString(16);
    const iv:string = this.crypto.getRandomString(16);
    const values = pkey + '.'+iv;

    const {nombre,apellidos,telefono,email,password} = register.getRawValue();
    const data: string = this.crypto.encryptJson({ nombre: nombre, apellidos: apellidos, telefono: telefono,email:email,password:password},pkey,iv);
    const s:string = this.crypto.encryptSecret(values);
    const signature:string = this.crypto.signEncrypted(data);

    const registerData = new FormData();

    registerData.append('data',data);
    registerData.append('s',s);
    registerData.append('sign',signature);


    return this.httpClient.post(environment.url_register,registerData,{observe:'body'}).pipe(catchError(this.handleError<any>('register')));

  }

  updateUserImage(userid:string,imagefile:File):Observable<boolean>{

    const formData = new FormData();
    formData.append("user_id",userid);
    formData.append("picture",imagefile);

    return this.httpClient.put<Cliente>(environment.url_update_image, formData,{observe:'response'}).pipe(map(response=>{

      if(response.ok){

          console.log(response.body);

          this.updateImageLocalStorage(response.body!);

          return true;

      }
      return false;

    }),catchError(this.handleError<any>('updateUserImage')));

  }

  public get currentUserValue(): Cliente | undefined{
    const user = JSON.parse(localStorage.getItem('user')!);
    this.currentUserSubject.next(user);
    if(this.currentUserSubject !== null){
      return this.currentUserSubject.value;
    }
    return undefined;
  }

  public get userName():string{

    return this.currentUserSubject.value.nombre;

  }

  public get userEmail():string{

    return this.currentUserSubject.value.email;

  }

  public get userId():string{

    return this.currentUserSubject.value._id;

  }
/*
  public get userPicture():string{

    return this.currentUserSubject.value.email;

  }
*/
  logout():void{
    localStorage.removeItem('user');
    this.currentUserSubject.next({_id:'',
      nombre:'',
      apellidos:'',
      email:'',
      telefono:0})
    this.router.navigate(['']);
  }

  private updateImageLocalStorage(user: Cliente):void{

    let usr = JSON.parse(localStorage.getItem('user')!);
    user.email = usr.email;
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  setLocalStorageUser(user: Cliente):void{
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSubject.next(user);
  }


  private handleError<T>(operation = 'opearation',result?:T){
    return (error:any):Observable<T>=>{
      // TODO: send the error to remote logging infrastructure
      console.error(error);// log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
