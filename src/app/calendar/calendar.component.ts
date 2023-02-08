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
import { CitaService } from '../services/cita.service';
import { ServiciosService } from '../services/servicios.service';
import { Cita, NuevaCita } from 'app/models/cita';
import { Trabajador } from '../models/trabajador';
import { Servicio } from '../models/servicio';
import { ActivatedRoute } from '@angular/router';

const festivos = require('../../assets/data/festivos.json');
//const trabajadores = require('../../assets/data/trabajador.json');
@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
})

export class CalendarComponent {

  constructor(private citaService: CitaService, private serviciosService: ServiciosService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    //carga el calendario con los dias elegibles  para dos meses
    //g
    //this.get_trabajadores_servicio();
    
  }
//FIXME: como obtener una variable  de otro componenete
  //servicio: Servicio = new Servicio();
  trabajadores: Trabajador[] = new Array();


  mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  // binding (enlaza) en el template html 
  todayDate: Date = new Date();
  //
  selectedDate: Date = new Date();
  //definir fecha minima y maxima para mostrar
  minDate = this.todayDate;
  miliS = this.todayDate.getTime();
  //1 minuto = 60000 miisegundos
  add2Meses = 2 * 30 * 24 * 60 * 60000;
  maxDate = new Date(this.miliS + this.add2Meses);
  //dia: Date = new Date();

  horario = new Array();
  horarioStr: string[] = [];
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

  anyo: number=0;
  diames:number=0;
  dia: number=0;
  /**
   * evento que se produce al seleccionar un dia
   * @param event 
   */
  onSelect(event: any) {
   this.anyo=event.getFullYear();
    this.mes= event.getMonth(); 
    this.dia=event.getDate(); 


    //FIXME: con el año,mes,dia, trabajador obtenemos sus citas 
    //y generamos la lista de horas disponibles


    this.generarHorario();
    this.horarioStr = this.horario.map(a => a.hora + ":" + a.min);
    this.seleccionado = true;

  }
  postcita() {
    //alert("post",this.anyo," " ,this.mes," " ,this.dia);
  }

  nofestivos: boolean[] = new Array();
  /**
   * para deshabilitar dias y no se puedan clicar
   */
  deshabilitaDias = (d: Date): boolean => {
    //this.nofestivos = festivos.every((d.getDay() != festivos.dia));
    return (d.getDay() !== 0 && d.getDay() !== 6);
  }


  private get_trabajadores_servicio = (id:string) => {
    this.serviciosService.getTrabajadoresServicio(id).subscribe(res => this.trabajadores = res);
}
  /**
   * 
   * 
  
    private getProducts(): void {
      this.productService.getProducts().subscribe(res => this.products = res);
    }
  
    add(): void {
  
      const { name, price, description } = this.productForm.getRawValue();
  
      this.productForm.reset();
  
      this.productService.addNewProduct(name, price, description).subscribe(result => {
  
        if (result) { 
          this.getProducts();
        }
      })
  
    }
  
    deleteProduct(index: number): void {
      this.productService.deleteProduct(this.products[index]._id).subscribe(result => {
        if (result) {
          this.getProducts();
        }
      })
    }
    updateProduct(index: number): void {
      const { name, price, description } = this.productForm.getRawValue();
      this.productService.updateProduct(this.products[index]._id, name, price, description).subscribe(result => {
        if (result) {
          this.productForm.reset();
          this.getProducts();
        }
      })
    }
   */



  /*
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };*/
}
