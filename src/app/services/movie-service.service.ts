import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPelicula } from '../interfaces/interfaces';

const apiKey = environment.apiKey;
const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
inicio: string;
fin: string;
constructor(private client: HttpClient) { }
private contador = 0;

private ejecutarQuery<T>( query: string ) {

  query = URL + query;
  query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

  return this.client.get<T>( query );

}

getConfig() {
const hoy = new Date();
const ultimodia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
const mes = hoy.getMonth() + 1;
let mesSting;

if (mes < 10) {
  mesSting = '0' + mes;
} else {mesSting = mes;
}

this.inicio = `${hoy.getFullYear()}-${mesSting}-01`;
this. fin = `${hoy.getFullYear()}-${mesSting}-${ultimodia}`;

// tslint:disable-next-line: max-line-length
return this.ejecutarQuery<RespuestaPelicula>(`/discover/movie?primary_release_date.gte=${this.inicio}&primary_release_date.lte=${this.fin}`);

}

getPopulares() {

  this.contador++;

  const query = `/discover/movie?sort_by=popularity.desc&page=${ this.contador }`;

  return this.ejecutarQuery<RespuestaPelicula>(query);

}
}
