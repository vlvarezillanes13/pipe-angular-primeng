import { NgModule } from '@angular/core';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';



@NgModule({
  declarations: [],
  imports: [
    //NO se utiliza ya que no se usa en el módulo solo se exporta
  ],
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,    
  ]
})
export class PrimeNgModule { }
