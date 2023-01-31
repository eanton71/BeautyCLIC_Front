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
import { catchError, Observable, of } from 'rxjs';

import { Cita } from '../models/cita';
@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private port = 3000;
  private urlgetCServicio = 'http://localhost:' + this.port + '/api/citas-servicio';
  private urlgetCCliente = 'http://localhost:' + this.port + '/api/citas-cliente';
  private urlpost = 'http://localhost:' + this.port + '/api/cita-trabajador-cliente';
  //private urldelete = 'http://localhost:' + this.port + '/api/delete_product';
 // private urlput = 'http://localhost:' + this.port + '/api/put_product';
  constructor(private httpClient: HttpClient) { }



  getCitasServicio(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(this.urlgetCServicio).pipe(catchError(this.handleError<any>('getProducts')));
  }
  getCitasCliente(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(this.urlgetCCliente).pipe(catchError(this.handleError<any>('getProducts')));
  }
  addCita(name: string, price: number, description: string): Observable<object> {

    const data = { name: name, price: price, description: description };
    //CORRECCION {data} en windows,    {info:data} en MAC
    return this.httpClient.post(this.urlpost, { info: data }, { observe: 'body' }).pipe(catchError(this.handleError<any>('addNewProduct')));
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
