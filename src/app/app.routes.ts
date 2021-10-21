import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { SharedComponent } from "./components/shared/shared.component";
import { HomeComponent } from "./components/utilidades/home/home.component";
import { YeisonjaramilloComponent } from "./components/yeisonjaramillo/yeisonjaramillo.component";




const APP_ROUTES: Routes=[
    {path:'about',component:AboutComponent},
    {path:'home',component:HomeComponent},
    {path:'footer',component:FooterComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'shared',component:SharedComponent},
    {path:'jaramillo',component:YeisonjaramilloComponent},
    {path:'**', pathMatch:'full',redirectTo:'about'}

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);