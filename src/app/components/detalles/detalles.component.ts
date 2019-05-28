import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
@Input() id;

pelicula: PeliculaDetalle = {};
actores: Cast[] = [];

  constructor(private detalle: MovieService) { }

  ngOnInit() {
    console.log('id', this.id);
    this.detalle.getPeliculaDetalle(this.id).subscribe(resp => this.pelicula = resp);

    this.detalle.getActoresPelicula(this.id).subscribe( resp => {
      console.log( resp );
      this.actores = resp.cast;
    });
  }
}
