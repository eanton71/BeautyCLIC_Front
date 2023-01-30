import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriesComponent } from './categories/categories.component';

import { HeaderComponent } from './components/shared/header/header.component';   
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PoliticaprivacidadComponent } from './components/politicaprivacidad/politicaprivacidad.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { LogRegisterComponent } from './log-register/log-register.component';


//material 
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContactoComponent,
    PoliticaprivacidadComponent,
    HomeComponent,
    CalendarComponent,
    CategoriesComponent,
    ProfileComponent,
    LogRegisterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    //Material 
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatListModule,  
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    // Material 
 
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    MatPaginator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
