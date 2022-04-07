import { Component } from "@angular/core";


@Component({
    selector: 'app-heroes',
    templateUrl: 'heroes.component.html'
})

export class HeroesComponent{
   public nombre: string = "Yeti";
   public edad: number =30;

   get nombreCapitalizado(){
       return this.nombre.toUpperCase();
   }

   obtenerNombre():string {
    return `${ this.nombre } - ${ this.edad }`;
   }

  cambiarNombre(cnombre:string){
    this.nombre=cnombre;
  } 

  cambiarEdad(cedad:number){
    this.edad=cedad;
  } 
}