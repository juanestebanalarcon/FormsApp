import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  formularioLogin:FormGroup=this.fb.group({
    
  })


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
