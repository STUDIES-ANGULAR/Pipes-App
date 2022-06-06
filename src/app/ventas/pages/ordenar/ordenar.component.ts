import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {
  enMayuscula: boolean = false;
  ordenarPor: string = '';
  heroes: Heroe []  = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Iron man',
      vuela: true,
      color: Color.rojo
    }
  ]

  cambiarMayuscula(): void {
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden (valor: string){
    this.ordenarPor = valor;
    console.log(valor);
    // if(this.ordenarPor!=)
  }

}
