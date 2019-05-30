import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Peliculas } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit {
@Input() peliculas: Peliculas;
@Input() populares: Peliculas;
slideOpts = {
  slidesPerView: 3.1,
  freeMode: true
};
  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}
  
  
  async verDetalle( id ){
    const mostrarModal = await this.modalCtr.create({
      component: DetallesComponent,
      componentProps: {id}
    });
    return await mostrarModal.present();
      }
}
