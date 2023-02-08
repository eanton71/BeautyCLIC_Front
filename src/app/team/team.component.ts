import { Component } from '@angular/core';
import { Trabajador } from 'app/models/trabajador';
import { TeamService } from '../services/team.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  serverimg = environment.url_public;
  trabajadores: Trabajador[] =[];
  urlimg: string[] = [];
  constructor(private teamService:TeamService) {

  }
  ngOnInit() {
    //carga una lista con las Trabajadores
    this.getTrabajadores();
  }
  private getTrabajadores(): void {
    this.teamService.getTrabajadores().subscribe(res => this.trabajadores = res);
  }

}
