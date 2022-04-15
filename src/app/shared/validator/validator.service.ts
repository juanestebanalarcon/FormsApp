import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService { 

  public nombreApellidoPattern:string="([a-zA-Z]+) ([a-zA-Z+])";
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
  noPuedeSerStrider(control: FormControl): ValidationErrors | null{
    const val:string=control.value?.trim().toLowerCase();
    if(val==='strider'){return {noStrider:true}}else{return null;}
  }
  camposIguales(field1:string,field2:string){
    return (formGroup:AbstractControl): ValidationErrors | null =>{
      const pass=formGroup.get(field1)?.value;
      const pass_confirm=formGroup.get(field2)?.value;
      if(pass !== pass_confirm){
        formGroup.get(field2)?.setErrors({noIguales:true});  
        return {noIguales:true}
      }
      formGroup.get(field2)?.setErrors(null);
      return null;

    }
  }
}
