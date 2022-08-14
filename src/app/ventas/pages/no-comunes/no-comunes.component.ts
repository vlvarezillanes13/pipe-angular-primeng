import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = "Vicente";
  genero: string = "masculino";
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Juan','Vicente','Valeria'];
  clienteMapa = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperado.',
    'other':'tenemos # clientes esperadando.'
  }

  constructor( private primengConfig: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarCliente(){
    if (this.genero === 'masculino'){ this.nombre = "Valeria"; this.genero= "femenino"}
    else{this.nombre = "Vicente"; this.genero= "masculino" }
  }

  borrarCliente(){
    this.clientes.pop();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Vicente',
    edad: 24,
    direccion: 'Quilpué, Valparaiso'
  }

  //Json

  heroes = [
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ];

  //Asycn

  miObservable = interval(1000);  //0 - 1000

  valorPromesa =   new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data de promesa');
    }, 3500);
  });

}
