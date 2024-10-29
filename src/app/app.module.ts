import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesModule } from './series/series.module'; // Importar SeriesModule

@NgModule({
  declarations: [
    AppComponent // Solo AppComponent se declara aquí
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SeriesModule // Importamos SeriesModule para que 'app-list-series' esté disponible
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


