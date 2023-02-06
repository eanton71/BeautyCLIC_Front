import { Component } from '@angular/core';
import { Categoria } from 'app/models/categoria';
import { ServiciosService } from 'app/services/servicios.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  categorias: Categoria[] = [];
  constructor(private serviciosService: ServiciosService) {

  }
  ngOnInit() {
    //carga una lista con las categorias
    this.getCategorias();
  }
  private getCategorias(): void {
    this.serviciosService.getCategorias().subscribe(res => this.categorias = res);
  }
}
