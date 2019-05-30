import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../../interfaces/interfaces';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
constructor(private service: MovieService) {}
  superheroes: Peliculas[] = [ ];

  textoBuscar = '';
  search;
  search2 = false;
  busqueda: Peliculas[] = [];
  ngOnInit() {
    this.service.getConfig().subscribe(resp=>{
      this.superheroes = resp.results;
    });
  }

  onSearchChange(e) {
     const valor = e.detail.value;
     this.busqueda = [];
     if (valor.length !== 0) {
      this.search = true;
      this.service.getBusqueda(valor)
     .subscribe(resp => {
       this.busqueda = resp.results;
       this.search = false;
       this.search2 = true;

     }); } else { this.search2 = false; }
  }

  
}
