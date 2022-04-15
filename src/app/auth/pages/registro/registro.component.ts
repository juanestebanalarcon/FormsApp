import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  formularioRegistro: FormGroup=this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.validatorsSerrvice.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorsSerrvice.emailPattern)],[this.emailValidatorService]],
    username:['',[Validators.required,this.validatorsSerrvice.noPuedeSerStrider]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirm_password:['',[Validators.required]],
  },
  //Me permite asignar validaciones para todos los campos, o más de dos.
  {
    validators:[this.validatorsSerrvice.camposIguales('password','confirm_password')]
  }
  )
  
  get emailErrorMsg():string{
    const errors=this.formularioRegistro.get('email')?.errors;
    if(errors?.required){
      return "Campo email es obligatorio.";
    }else if(errors?.pattern){
      return "El valor ingresado no tiene formato de correo.";
    }else if(errors?.emailSelectedExists){
      return "El email ingresado ya se encuentra registrado.";
    }
    return '';
  };
  constructor(private fb:FormBuilder, private validatorsSerrvice:ValidatorService, private emailValidatorService:EmailValidatorService) { }

  ngOnInit(): void {
    this.formularioRegistro.reset({
      nombre:'Test',
      email:'test1@test.com',
      username:'test123'
    })
  }

  /*
  emailRequired(){
    return this.formularioRegistro.get('email')!.errors?.required && this.formularioRegistro.get('email')!.touched;
  }
  emailFormat(){
    return this.formularioRegistro.get('email')!.errors?.pattern && this.formularioRegistro.get('email')!.touched;
  }
  emailExists(){
    return this.formularioRegistro.get('email')!.errors?.emailSelectedExists && this.formularioRegistro.get('email')!.touched;
  }
  */
  campoNoValido(campo:string):boolean{
    return this.formularioRegistro.get(campo)!.invalid && this.formularioRegistro.get(campo)!.touched;
  }
  submitFormulario(){
    console.log(this.formularioRegistro.value);
    this.formularioRegistro.markAllAsTouched();
  }
}
