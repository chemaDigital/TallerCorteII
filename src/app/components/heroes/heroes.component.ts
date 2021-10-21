import { Component, OnInit } from '@angular/core';
import { heroesService } from 'src/app/servicios/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor(private serviceheroes:heroesService) { }

  ngOnInit(): void {
  }

}
