import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
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
  constructor(private service: MovieService) {}
ngOnInit() {

 this.mostrarPelicula();
 this.getPopulares();
//  this.service.getPopulares().subscribe(resp => {
//   .log('respuesta', resp);
//   this.populares = resp.results; } );
 this.iniciar = this.service.inicio;
 this.terminar = this.service.fin;
}

cargarMas() {
this.getPopulares();
}

mostrarPelicula() {
this.service.getConfig()
.subscribe(resp => this.peliculas = resp.results);
}

getPopulares() {
  this.service.getPopulares()
  .subscribe( resp => {
  const arrTemp = [ ...this.populares, ...resp.results ];
  this.populares = arrTemp;
  });
}

}
