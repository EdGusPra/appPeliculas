import { Component, OnInit, Input} from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
@Input() id;
slideOpts = {
  slidesPerView: 3.3,
  freeMode: true,
  spaceBetween: -5
};
oculto = 150;
pelicula: PeliculaDetalle = {};
actores: Cast[] = [];
estrella = 'star';
  constructor(private detalle: MovieService, private modal: ModalController, private servicio: DataLocalService) { }
  ngOnInit() {

  this.servicio.existePelicula(this.id).then(existe => this.estrella = (existe) ? 'star' : 'star-outline');


  this.detalle.getPeliculaDetalle(this.id).subscribe(resp => {this.pelicula = resp;
  //  console.log('resp', this.pelicula);
    });

  this.detalle.getActoresPelicula(this.id).subscribe( resp => {
      this.actores = resp.cast;
    });
  }
  leermas(){
    this.oculto = 5000;
  }
  volver() {
    this.modal.dismiss();
  }

  favoritos() {
    const existe = this.servicio.guardarPelicula(this.pelicula);
    this.estrella = (existe) ? 'star' : 'star-outline';

  }
}
