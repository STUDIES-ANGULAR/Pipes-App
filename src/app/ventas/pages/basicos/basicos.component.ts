import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'arley';
  nombreUpper: string = 'ARLEY';
  nombreCompleto: string = 'aRlEy RivAs'

  fecha: Date = new Date();
}
