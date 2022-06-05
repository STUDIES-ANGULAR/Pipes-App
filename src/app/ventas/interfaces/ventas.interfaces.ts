 export enum Color{
     rojo, negro, verde, azul
     //0     1      2      3   es trabajar con valores numericos pero con alias de palabra
 }
 
 export interface Heroe {
     nombre: string,
     vuela: boolean,
     color: Color
 }