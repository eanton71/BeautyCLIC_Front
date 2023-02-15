import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Trabajador } from '../models/trabajador';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //private url = 'http://localhost:3000/api/get_trabajadores';

  constructor(private httpClient: HttpClient) { }

  getTrabajadores():Observable<Trabajador[]>{
    return this.httpClient.get<Trabajador[]>(environment.url).pipe(catchError(this.handleError<any>('getTrabajadores')));
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
