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

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError, Observable, of } from 'rxjs';

import { Cita, NuevaCita, CitaCliente } from '../models/cita'; 
@Injectable({
  providedIn: 'root'
})
export class CitaService {
 
  private port = 3000;
  private urlgetCitasTrabajadorDia = 'http://localhost:' + this.port + '/api/get_citas_trabajador_dia';
  private urlgetCitasCliente = 'http://localhost:' + this.port + '/api/get_citas_cliente';
  private urlpost = 'http://localhost:' + this.port + '/api/post_cita_trabajador_cliente';

  //TODO: revisar para modificar citas y anularlas
  //private urldelete = 'http://localhost:' + this.port + '/api/delete_product';
 // private urlput = 'http://localhost:' + this.port + '/api/put_product';
  constructor(private httpClient: HttpClient) {

    
   }

   

//Obtener lista de citas por dia y  trabajador
  getCitasTrabajadorDia(anyo: Number, mes: Number, dia: Number,id_trabajador:string): Observable<Cita[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("anyo", anyo.toString());
    queryParams = queryParams.append("mes", mes.toString());
    queryParams = queryParams.append("dia", dia.toString());
    queryParams = queryParams.append("id_trabajador", id_trabajador);
    return this.httpClient.get<Cita[]>(this.urlgetCitasTrabajadorDia, { observe: 'body',  params:queryParams }).pipe(catchError(this.handleError<any>('getCitasServicio')));
  }

  //Mostrar citas del cliente despues de loguear
  getCitasCliente(id_cliente: string): Observable<CitaCliente[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id_cliente", id_cliente); 
    return this.httpClient.get<CitaCliente[]>(this.urlgetCitasCliente, { observe: 'body', params: queryParams }).pipe(catchError(this.handleError<any>('getCitasCliente')));
  }
  //guardar cita (fecha,hora, servicio,trabajdor,cliente)
  guardarCita(cita: NuevaCita): Observable<NuevaCita> { 
     
    //CORRECCION {data} en windows,    {info:data} en MAC
    console.log(cita);
    return this.httpClient.post<NuevaCita>(this.urlpost, { cita }, { observe: 'body' })
      .pipe(
        catchError(this.handleError<any>('guardar cita'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
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
