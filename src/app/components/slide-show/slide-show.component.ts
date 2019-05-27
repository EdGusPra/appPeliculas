import { Component, OnInit, Input } from '@angular/core';
import { Peliculas } from '../../interfaces/interfaces';

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
  }
  constructor() { }

  ngOnInit() {}

}
