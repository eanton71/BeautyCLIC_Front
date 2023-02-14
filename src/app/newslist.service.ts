import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Observable } from 'rxjs';
import { LogregService } from './services/logreg.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewslistService {

  url:string;
  

  constructor(private logregService: LogregService, private httpClient: HttpClient) { 
    this.url = environment.url_newslist; // 'http://localhost:3000/api/newslist';
    }

  ngOnInit() {    
  }

  public isLoggedUserSubscribed():Observable<any> {
    let email: string = this.logregService.userEmail; // comprobar que no necesite ()
    console.log('El email logueado es: ', email);

    // email = 'as@bes.com';
    
    if (email) {
      return this.httpClient.get<any>(this.url+'/'+ email).pipe(catchError(this.handleError<any>('isLoggedUserSubscribed')));
      
    }
    else {
      return of(false);
    }
  }    

  public addEmail(email: string): Observable<object> {
    const data = {'email' : email};
    return this.httpClient.post(this.url, data).pipe(catchError(this.handleError<any>('addEmail email')));
  }

  public deleteEmail(email: string): Observable<object> {    
    return this.httpClient.delete(this.url + '/' + email).pipe(catchError(this.handleError<any>('deleteEmail email')));
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
