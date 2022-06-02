import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


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
  clientes: any = ['Arley', 'Kelly', 'Juan', 'Carlos', 'Carmensa'];
  clientesMapa = {
    '=0': 'no tenemos cliente esperando.',
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

  //KeyValue Pipe
  persona = {
    nombre: 'Arley',
    edad: 26,
    direccion: 'Buenaventura, Colombia'
  }


  //JsonPipe
  heroes = [
    {
      nombre : 'Superman',
      vuela: true
    },
    {
      nombre : 'Robin',
      vuela: false
    },    
    {
      nombre : 'Aquamana',
      vuela: false
    }    
  ]


  //Async Pipe
  miObservable = interval(4000);  //emitira los valores 0,1,2,3,4,5,6,7.. 
  
  valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de la promesa');
    }, 3500);
  });

}
