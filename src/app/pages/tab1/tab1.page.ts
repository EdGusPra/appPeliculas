import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Peliculas } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
peliculas: Peliculas[] = [];
populares: Peliculas[] = [];
iniciar: string;
terminar: string;
  constructor(private service: MovieServiceService) {}
ngOnInit() {

 this.mostrarPelicula();
 this.getPopulares();
//  this.service.getPopulares().subscribe(resp => {
//   console.log('respuesta', resp);
//   this.populares = resp.results; } );
 this.iniciar = this.service.inicio;
 this.terminar = this.service.fin;
}

cargarMas() {
this.service.getPopulares();
}

mostrarPelicula() {
this.service.getConfig()
.subscribe(resp => this.peliculas = resp.results);
}

getPopulares() {
  this.service.getPopulares()
  .subscribe( resp => {
  console.log('Populares', resp.results);
    const arrTemp = [ ...this.populares, ...resp.results ];
    this.populares = arrTemp;
  });
}

}
