import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  formularioDinamico:FormGroup=this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['GTA-V',Validators.required],
      ['Halo 2',Validators.required],

    ],Validators.required)
  })
  nuevoFav: FormControl=this.fb.control('',Validators.required);
  get favoritosArr(){
    return this.formularioDinamico.get('favoritos') as FormArray;
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  esValido(campo:string):boolean{
    return this.formularioDinamico.controls[campo].errors! 
    && this.formularioDinamico.controls[campo].touched;
  }
  agregarFav(){
    if(this.nuevoFav.invalid){return;}
    //this.favoritosArr.push(new FormControl(this.nuevoFav.value,Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFav.value,Validators.required));
    this.nuevoFav.reset();
  }
  save(){
    if(this.formularioDinamico.invalid){this.formularioDinamico.markAllAsTouched();
    return;
    }
    console.log(this.formularioDinamico.value);
    this.formularioDinamico.reset();
  }
  eliminar(index:number){
    //splice() = removeAt()
    this.favoritosArr.removeAt(index);
  }
}
