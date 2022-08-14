import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = "álvarez";
  nombreUpper: string = "ÁLVAREZ";
  nombreCompleto: string = "ViCenTe áLvaReZ";

  fecha: Date = new Date(); //el día de hoy

}
