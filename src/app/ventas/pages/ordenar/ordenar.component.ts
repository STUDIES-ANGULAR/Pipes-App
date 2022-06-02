import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  nosotros : string = 'casa';
  enMayuscula: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayuscula(): void {
    this.enMayuscula = !this.enMayuscula;
  }

}
