import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{
  formularioSwitches:FormGroup=this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[true,Validators.required],
    condiciones:[false,Validators.requiredTrue]
  })
  persona={
    genero:'M',
    notificaciones:true,
    //condiciones:false
  }
  ngOnInit(): void {
      this.formularioSwitches.reset({...this.persona,condiciones:false});
      this.formularioSwitches.valueChanges.subscribe(({condiciones,...rest}) =>{/*delete form.condiciones*/ 
      this.persona=rest;
      })
  }
  guardar(){
    const formVal={...this.formularioSwitches.value};
    delete formVal.condiciones;
    this.persona=formVal;
    console.log(formVal);
  }
  constructor(private fb:FormBuilder) { }

}
