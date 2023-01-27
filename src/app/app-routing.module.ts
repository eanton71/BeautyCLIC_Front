import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PoliticaprivacidadComponent } from './components/politicaprivacidad/politicaprivacidad.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './guard/auth.guard';
import { LogRegisterComponent } from './log-register/log-register.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'login', component: LogRegisterComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard] }, 

/**FIXME pagina principal */
  { path: "home", component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'politicaprivacidad', component: PoliticaprivacidadComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
