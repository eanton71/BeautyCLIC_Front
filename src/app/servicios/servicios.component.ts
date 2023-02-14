import { Component, inject } from '@angular/core'; 
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
  //FIXME: poner esto en categorias y navbar para guardadr datos en storgae 
  toCalendar(id_servicio: string) {
    let servicio = this.servicios.find(a => a._id = id_servicio) ;
    if(servicio)this.serviciosService.setLocalStorageServicio(servicio)//return this.router.navigateByUrl('/calendar', id_servicio);
  }
  private getCategorias(): void {
    this.serviciosService.getCategorias().subscribe(res => this.categorias = res);
  }
  public getServicios(id: string): void{
    this.serviciosService.getServicios(id).subscribe(res => this.servicios = res);

  }
}
