import { Component, OnInit, Input } from '@angular/core';
import { Peliculas } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent implements OnInit {
  @Input() peliculas: Peliculas;
  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };
  constructor(private modal: ModalController) { }

  ngOnInit() {}

async mostrarModal(id) {
const mostrarModalComponent = await this.modal.create({
  component: DetallesComponent,
  componentProps: {id}
});
return await mostrarModalComponent.present();
  }

}
