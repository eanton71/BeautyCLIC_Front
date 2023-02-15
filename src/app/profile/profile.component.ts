import { Component } from '@angular/core';
import { LogregService } from '../services/logreg.service';
import { Cita } from '../models/cita';
import { CitaService } from '../services/cita.service';
import { Trabajador } from '../models/trabajador';
import { Servicio } from 'app/models/servicio';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  username:string;
  email:string;
  image:string;
  path:string;
  citas: Cita[] = [];
  trabajadores: Trabajador[] = [];
  servicios: Servicio[] = [];
  arraysListos:boolean= false;
 
  constructor(private logreg:LogregService,private citasService:CitaService){
    this.username = '';
    this.email = '';
    this.image = '';
    this.path = '/assets/image/';
  }
  private loadArrays = async () => {
    return this.citas.forEach(c => {
      //FIXME: TODO: this.trabajadores.push(JSON.parse(c.trabajador));
      //this.servicios.push(JSON.parse(c.servicio));
    });
    
     
  }
  ngOnInit():void{

    this.username = this.logreg.userName !== null?this.logreg.userName:'';
    this.email = this.logreg.userEmail !== null?this.logreg.userEmail:'';
 
    this.getCitasCliente(this.logreg.userId);

    
    if (this.citas && this.trabajadores && this.servicios) this.arraysListos = true;
    //console.log(this.trabajadores);
  }
  private getCitasCliente = async (id_cliente: string) => {
    await this.citasService.getCitasCliente(id_cliente).subscribe((res: Cita[]) => {
      this.citas = res;
      this.loadArrays().then(
      );
      //console.log(res);
      //this.trabajadores = res.map(a => a.trabajador);
     // console.log(this.trabajadores)
      //this.servicios = res.map(a => JSON.parse(a.servicio));
    });
  }
  fileSelected(e:Event):void{
    const file:File = (e.target as HTMLInputElement).files![0];

    const allowed = ['image/png','image/jpg','image/jpeg'];

    if(file !== undefined && allowed.includes(file.type)){

      this.logreg.updateUserImage(this.logreg.userId,file).subscribe(result=>{
        console.log(file);
        if(result){
          //this.path = '';
         // this.path = '/assets/image/'+this.logreg.userId+'/'+this.logreg.userPicture;
        }
      })
    }
  }

  logout():void{

    this.logreg.logout();

  }

}
