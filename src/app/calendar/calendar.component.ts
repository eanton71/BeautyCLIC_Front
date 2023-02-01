/**
 * elementos
 * calendario mensual: se carga con los dias disponibles 
 * deshabilita  festivos.json y sabados y domingo (poner en otro color)
 * recibe del servidor lista de citas   a partir de una rango de fechas (1 a dos meses)
 *  GET parametro: servicio , retorna  lista de {año,mes,dia,hora,minutos,trabajador,duracion}
 * 
 * selectores para los trabajadores que salen en la tabla
 * 
 * lista de horas diaria: 
 * cuando se hace click en un dia disponible 
 * muestra las horas disponibles en rangos de un cuarto de hora a partir del horario del centro (10-21)
 * carga la tabla de citas para ese dia y trabajador seleccionado: bloquea los tramos cogidos en las citas
 * muestra botones en los tramos libres
 * 
 * una vez selecionado el tramo se confirma (boton confirmar), se envia a servidor para guardar
 * POST {año,mes,dia,hora,minutos,servicio,trabajador,cliente}
 * 
 */
import { Component } from '@angular/core'; 
import * as festivos from '../../assets/data/festivos.json'
//import { Hora, Horario } from './horario';
//import { Horario,Hora } from './horario';
@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
})
  
export class CalendarComponent { 
  mes = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  // binding (enlaza) en el template html 
  todayDate: Date = new Date();
  //
  selectedDate: Date = new Date() ;
  //definir fecha minima y maxima para mostrar
  minDate = new Date(2023, 0, 1);
  maxDate = new Date(2023, 3, 31); 
  dia: Date = new Date();
  
  horario = new Array(); 
  horarioStr:string[] = [];
  seleccionado = false;
  generarHorario() {
    this.horario = new Array();
    let hora: number = 9;
    let min: number = 0;
    this.horario.push({ hora: 9, min: 0 }); 
    for (let i = 1; i < 48; i++) { 
      hora = hora + Math.floor((min + 15) / 60);
      min = (min + 15) % 60;
      this.horario.push({ hora: hora, min: min });
     
    }
  }
  onSelect(event: any) {
    console.log(event);
    this.selectedDate = event;
    this.dia = event; 
    
    
   /*
    console.log(this.dia.getFullYear());
    console.log(this.mes[this.dia.getMonth()]);
    console.log(this.dia.getDate());
    */
    this.generarHorario();
    console.log(this.horario);
    this.horarioStr = this.horario.map(a => a.hora + ":"+a.min);
    this.seleccionado = true;
  }
  //dia: this.selectedDate.getDay()
  deshabilitaDias = (d: Date): boolean => {
    for (let i = 0; i < 10;i++){}
    return (d.getDay() !== 0 && d.getDay() !== 6);
  }
  
  /*
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };*/
}
