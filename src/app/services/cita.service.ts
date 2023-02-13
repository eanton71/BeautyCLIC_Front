/**
 * se envia desde la pagina servicios (parametro servicio)
 * GET parametro: servicio , retorna  lista de {año,mes,dia,hora,minutos,trabajador,duracion}
 * 
 * 
 * se envia desde la pagina calendario para guardar la cita
 * POST {año,mes,dia,hora,minutos,servicio,trabajador,cliente}
 * 
 * Desde la pagina login se abre la pagina mis citas 
 * GET parametro: cliente, retorna lista de  {año,mes,dia,hora,minutos,servicio,duracion,trabajador}
 *
 * Hay que implementar las funciones bien y poner las llamadas en los componentes que las necesiten
 * */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from 'app/models/servicio';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';

import { Cita,NuevaCita } from '../models/cita';
import { Trabajador } from '../models/trabajador';
@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private currentServicioSubject: BehaviorSubject<Servicio>;
  private port = 3000;
  private urlgetTrabajadoresServicio = 'http://localhost:' + this.port + '/api/get_trabajadores_servicio';
  private urlgetCitasTrabajadorDia = 'http://localhost:' + this.port + '/api/get_citas_trabajador_dia';
  private urlgetCitasCliente = 'http://localhost:' + this.port + '/api/get_citas_cliente';
  private urlpost = 'http://localhost:' + this.port + '/api/post_cita_trabajador_cliente';

  //TODO: revisar para modificar citas y anularlas
  //private urldelete = 'http://localhost:' + this.port + '/api/delete_product';
 // private urlput = 'http://localhost:' + this.port + '/api/put_product';
  constructor(private httpClient: HttpClient) {

    this.currentServicioSubject = new BehaviorSubject<Servicio>(JSON.parse(localStorage.getItem('servicio') || '{}'));
   }

  //trabajadores que realizan un servicio determinado
  //
  //retorna array de {nombre, foto, horario {}} 
  getTrabajadoresServicio(): Observable<Trabajador[]> {
    return this.httpClient.get<Trabajador[]>(this.urlgetTrabajadoresServicio+"/123").pipe(catchError(this.handleError<any>('getCitasServicio')));
  }

//Obtener lista de citas por dia y  trabajador
  getCitasTrabajadorDia(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(this.urlgetCitasTrabajadorDia, { observe: 'body', params:{} }).pipe(catchError(this.handleError<any>('getCitasServicio')));
  }

  //Mostrar citas del cliente despues de loguear
  getCitasCliente(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(this.urlgetCitasCliente).pipe(catchError(this.handleError<any>('getCitasCliente')));
  }
  //guardar cita (fecha,hora, servicio,trabajdor,cliente)
  guardarCita(cita:NuevaCita): Observable<object> {

    //const data = { name: name, price: price, description: description };
    //CORRECCION {data} en windows,    {info:data} en MAC
    return this.httpClient.post(this.urlpost, { info: cita }, { observe: 'body' }).pipe(catchError(this.handleError<any>('addCita')));
  }

/**
 * FUNCIONES PARA Beahovir Subject servicio
 */

  cleanLS_Servicio(): void {
    localStorage.removeItem('servicio');
    this.currentServicioSubject.next({
      _id: '',
      nombre: '',
      duracion: 0,
      descripcion: '',
      precio: 0,
      categoria: '',
      foto:''
    })
    //this.router.navigate(['']);
  }
  /**
   * 
   * @param servicio 
   */

  setLocalStorageServicio(servicio: Servicio): void {
    localStorage.setItem('servicio', JSON.stringify(servicio));
    this.currentServicioSubject.next(servicio);
  }
  private handleError<T>(operation = 'opearation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);// log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
