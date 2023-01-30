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
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
/*
const ELEMENT_DATA: Element[] = [
  { hora: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { hora: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { hora: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { hora: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { hora: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { hora: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { hora: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { hora: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { hora: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { hora: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
*/
@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
})


export class CalendarComponent { 
  /*columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: PeriodicElement) => `${element.weight}`,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: PeriodicElement) => `${element.symbol}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  
  displayedColumns = this.columns.map(c => c.columnDef);

*/
  //hora: Date = new Date(hours, minutes);
  todayDate: Date = new Date();
  //binding (enlaza) en el tempate html 
  selectedDate: Date = new Date() ;
  //definir fecha minima y maxima para mostrar
  minDate = new Date(2023, 0, 1);
  maxDate = new Date(2023, 3, 31);
  evento: string="";
  dateChanged(event: any) {
    this.evento = event.value;
    console.log("Date changed", event);
    //handler logic
  }
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
