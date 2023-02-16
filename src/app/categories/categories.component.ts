import { Component } from '@angular/core';
import { Categoria } from 'app/models/categoria';
import { Servicio } from 'app/models/servicio';
import { ServiciosService } from 'app/services/servicios.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  serverimg = environment.url_public;
  categorias: Categoria[] = [];
  servicios: Servicio[] = [];
  urlimg: string[] = [];
  mostrarCategorias = true;

  constructor(private serviciosService: ServiciosService) {

  }

  ngOnInit() {
    this.getCategorias();
  }
  //FIXME: en el find sise hace la comparacion con un igual cambia el valor = no === estricto SI
  toCalendar(id_servicio: string) {
    let servicio = this.servicios.find(a => a._id === id_servicio);
    if (servicio) this.serviciosService.setLocalStorageServicio(servicio)//return this.router.navigateByUrl('/calendar', id_servicio);
  }
  private getCategorias(): void {
    this.serviciosService.getCategorias().subscribe(res => this.categorias = res);
  }

  public getServicios(id: string): void{
    this.mostrarCategorias = false;
    this.serviciosService.getServicios(id).subscribe(res => this.servicios = res);
  }
}
