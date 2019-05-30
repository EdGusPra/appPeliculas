import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
peliculas: PeliculaDetalle[] = [];
generos: Genre [] = [];
favoritoGenero: any [] = [];
  constructor(private service: DataLocalService, private movies: MovieService) {}
  ngOnInit() {
  }

 async ionViewWillEnter() {
    this.peliculas = await this.service.cargarFavoritos();
    this.generos = await this.movies.getGenre();
    this.cargarPorGenero(this.generos, this.peliculas);
  }

  cargarPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritoGenero = [];
    generos.forEach(genero => {
     this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(pelis => {
         return pelis.genres.find(genre => genre.id === genero.id);
        })
     });
      });
    console.log(this.favoritoGenero);
  }

}
