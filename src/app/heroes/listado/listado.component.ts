import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 })
export class ListadoComponent  {

  public heroes: string[]=['Hulk','Linterna Verde','Batman','Superman'];
  public heroeborrado:string='';
borrarHeroe(){
  this.heroeborrado=this.heroes.shift() || '';
  
}


}
