import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Peliculas } from '../../interfaces/interfaces';


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
  constructor() { }

  ngOnInit() {}

  onClick () {
    this.cargarMas.emit();
    console.log(this.cargarMas);
  }

}
