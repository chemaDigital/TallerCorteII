import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class heroesService {
    constructor(){
        console.log("servicio listo para usar");
    }
}