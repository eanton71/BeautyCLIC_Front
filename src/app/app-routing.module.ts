import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PoliticaprivacidadComponent } from './components/politicaprivacidad/politicaprivacidad.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [

{ path: "home", component:HomeComponent },

 { path: 'header', component: HeaderComponent },
 { path: 'footer', component: FooterComponent },
 { path: 'navBar', component: NavbarComponent },
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
