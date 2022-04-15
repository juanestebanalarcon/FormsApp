import { Component} from '@angular/core';

interface Persona{
  nombre:string;
  favoritos:Favorito[];
}
interface Favorito{
  id:number;
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  nuevoJuego:string='';
  persona: Persona={
    nombre:'Juanes',
    favoritos:[]
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1);
  }
  save(){
    console.log("Guardado");
  }
  agregarJuego():void{
    const nuevoFav:Favorito={
      id: this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFav});
    this.nuevoJuego='';
  }
}
