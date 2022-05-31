import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
 
  nombre: string = 'Arley';
  genero: string = 'masculino';

  invitacionMapping = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
   }

}
