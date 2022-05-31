import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Arley';
  genero: string = 'masculino';

  invitacionMapping = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'other': 'invitarte'
  }

  //i18nPlural
  clientes: any = ['Arley', 'Kelly', 'Juan Carlos'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    // el # representa el valor que estamos recibiendo, seria igual a tener  'other': `tenemos ${this.clientes.length} clientes esperando.`
    'other': 'tenemos # clientes esperando.'
  }


  cambiarNombre() {
    this.nombre = 'Johanna';
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
