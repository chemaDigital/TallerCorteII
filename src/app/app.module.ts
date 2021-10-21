import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//aqui  se importan las ruas
import { APP_ROUTING } from './app.routes';

//aqui se importan los servicios
import { heroesService } from './servicios/heroes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/utilidades/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { SharedComponent } from './components/shared/shared.component';
import { YeisonjaramilloComponent } from './components/yeisonjaramillo/yeisonjaramillo.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    SharedComponent,
    YeisonjaramilloComponent,
    FooterComponent
  ],
  //aqui importo los modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  //aqui importo los servicios creados
  providers: [heroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
