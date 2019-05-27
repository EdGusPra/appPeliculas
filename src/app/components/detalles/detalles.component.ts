import { Component, OnInit, Input } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';
import { MovieServiceService } from '../../services/movie-service.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
@Input() id;
detalleP: PeliculaDetalle = {};
actores: Cast [] = [];
  constructor(private detalle: MovieServiceService) { }

  ngOnInit() {
    console.log('id', this.id);
    this.detalle.getPeliculaDetalle(this.id).subscribe(resp => this.detalleP = resp);

    this.detalle.getPeliculaActores(this.id).subscribe(resp => this.actores = resp.cast);
  }
}
