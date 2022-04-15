import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{
  ngOnInit(): void {
    //se sugiere usar reset, setValue obliga a usar todas las propiedades.
      this.formularioReactive.reset({
        nombre:'GTX',
        precio:0,
        //existencias:1
      })
  }
  /*
  formularioReactive: FormGroup=new FormGroup({
    'nombre':new FormControl('RTX-800'),
    'precio':new FormControl(1200),
    'existencias':new FormControl(10),
  });
  */  
 formularioReactive:FormGroup=this.fb.group({
   nombre:[,[Validators.required,Validators.minLength(3)]],//se pone [] para especificar más de 1, los primeros son sincronos y los otros asíncronos
   precio:[,[Validators.required,Validators.min(0)]],
   existencias:[,[Validators.required,Validators.min(0)]]
 });
 esValido(campo:string):boolean{
   return this.formularioReactive.controls[campo].errors! 
   && this.formularioReactive.controls[campo].touched;
 }
 guardar(){
   if(this.formularioReactive.invalid){
    this.formularioReactive.markAllAsTouched(); 
    return;
   }
   console.log(this.formularioReactive.value);
   this.formularioReactive.reset();
 }
  constructor(private fb:FormBuilder) { }


}
