import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  /* 
  @Input() -> recibe un atributo
  @Output() -> lo emite
  @ViewChild() -> recibe una referencia local.
  */
 @ViewChild('formularioTemplate') FormularioTemplate!: NgForm;
 initForm={
   producto:'GTX-1080',
   precio:10,
   existencias:10
 }
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.FormularioTemplate.value);
    this.FormularioTemplate.resetForm({producto:'Vacío',precio:0,existencias:0});
  }
  nombreProductoisValid(): boolean {
  return this.FormularioTemplate?.controls.producto?.invalid  && this.FormularioTemplate?.controls.producto?.touched;
  }
  precioProductoisValid(): boolean {
  return this.FormularioTemplate?.controls.precio?.value<0  && this.FormularioTemplate?.controls.precio?.touched;
  }

}
