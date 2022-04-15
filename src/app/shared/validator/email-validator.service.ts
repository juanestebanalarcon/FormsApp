import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map,delay} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor(private http:HttpClient) { }
  validate(control: AbstractControl):Observable<ValidationErrors | null> {
    const email:string=control.value;
    const ApiUrl:string='http://localhost:3000';
    return this.http.get<any[]>(`${ApiUrl}/usuarios?q=${email}`).pipe(
      delay(3000),
      map(response =>{
        return (response.length===0)?null:{emailSelectedExists:true}
      })
    )
    
    ;
  }
}
