import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Peliculas } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';


@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {
  @Input() peliculas: Peliculas;
  @Output() cargarMas = new EventEmitter();
  slideOpts = {
    slidesPerView: 3.1,
    freeMode: true
  };
  constructor(private modal: ModalController) { }

  ngOnInit() {}

  onClick () {
    this.cargarMas.emit();
  }
  async verModal(id){
    // console.log(id);
    const modal= await this.modal.create({
      component: DetallesComponent,
      componentProps: {id}
    });
    return await modal.present();
  }


}
