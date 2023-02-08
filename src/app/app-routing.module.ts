import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PoliticaprivacidadComponent } from './components/politicaprivacidad/politicaprivacidad.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './guard/auth.guard';
import { LogRegisterComponent } from './log-register/log-register.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TeamComponent } from './team/team.component';
import { ServiciosComponent } from './servicios/servicios.component';
const routes: Routes = [
  { path: 'login', component: LogRegisterComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard] },

/**FIXME pagina principal */
  { path: "home", component: CategoriesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'politicaprivacidad', component: PoliticaprivacidadComponent },
 
  //requiere el id de los servicios
  { path: 'calendar/:id', component: CalendarComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'team', component: TeamComponent },
 
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },

];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
