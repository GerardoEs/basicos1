import {Component} from "@angular/core"; 

@Component({
    selector:'app-contador',
    template:`
    <h1>
    {{titulo}}
</h1>

<h1> La Base del Incremento es: {{valorincremento}}
</h1>
<button (click)="concentra(+valorincremento)">
  + {{valorincremento}}
</button>
<span>
    {{numero}}
</span>

<button (click)="concentra(-valorincremento)">
    - {{valorincremento}}
 </button>
 
 `
})

export class ContadorComponent{
    public titulo:string = '-Contador App';
    public numero:number =10;
    public valorincremento:number=1;
  
  
    concentra(valor:number){
      this.numero+=valor;
      
    }

}