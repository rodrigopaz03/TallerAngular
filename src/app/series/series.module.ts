import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSeriesComponent } from './list-series/list-series.component';

@NgModule({
  declarations: [
    ListSeriesComponent // Declarar aquí el componente
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListSeriesComponent // Exportar aquí el componente para que sea accesible en otros módulos
  ]
})
export class SeriesModule { }

