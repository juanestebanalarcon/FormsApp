import { Component} from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li {cursor:pointer;}
    `
  ]
})
export class SidemenuComponent {

  authMenu:MenuItem[]=[
    {texto:'Login',
    ruta:'./auth/login'
  },
    {texto:'Registro',
    ruta:'./auth/registro'
  }
  ]
  
  templateMenu: MenuItem[]=[
    {
      texto:'Básicos',
      ruta:'./template/basicos'
    },
    {
      texto:'Dinámicos',
      ruta:'./template/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./template/switches'
    },
  ];
  ReactiveMenu: MenuItem[]=[
    {
      texto:'Básicos',
      ruta:'./reactive/basicos'
    },
    {
      texto:'Dinámicos',
      ruta:'./reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./reactive/switches'
    },
  ];

}
