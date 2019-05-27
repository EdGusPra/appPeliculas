import { Component, OnInit, Input } from '@angular/core';
import { Peliculas } from '../../interfaces/interfaces';

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
  constructor() { }

  ngOnInit() {}

}
