import { Component } from '@angular/core';



@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
})


export class CalendarComponent {

  todayDate: Date = new Date();
  //binding (enlaza) en el tempate html 
  selectedDate: Date = new Date();
  //definir fecha minima y maxima para mostrar
  minDate = new Date(2023, 0, 1);
  maxDate = new Date(2023, 3, 31);

  dateChanged(event: any) {
    console.log("Date changed", event);
    //handler logic
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
