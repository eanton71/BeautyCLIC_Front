import { Component } from '@angular/core';
import { Categoria } from 'app/models/categoria';
import { Servicio } from 'app/models/servicio';
import { ServiciosService } from 'app/services/servicios.service';
import { environment } from '../../environments/environment';

//environment.url_public
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  serverimg = environment.url_public;
  categorias: Categoria[] = [];
  servicios: Servicio[] = [];
  urlimg: string[] = [];
  constructor(private serviciosService: ServiciosService) {

  }
  ngOnInit() {
    //carga una lista con las categorias
    this.getCategorias();
  }
  private getCategorias(): void {
    this.serviciosService.getCategorias().subscribe(res => this.categorias = res);
  }
  public getServicios(id: string): void{
    this.serviciosService.getServicios(id).subscribe(res => this.servicios = res);

  }
}
