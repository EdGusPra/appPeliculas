import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
peliculas: PeliculaDetalle [] = [];
  constructor(private storage: Storage, private toast: ToastController) {
    this.cargarFavoritos();
   }
  async presentToast(message) {
    const toast = await this.toast.create(
      {
        message,
        duration: 1500,
        position: 'middle'
      }
    );
    await toast.present();
}

  guardarPelicula(pelicula: PeliculaDetalle) {
   let existe = false;
   let mensaje = '';

   for (const peli of this.peliculas) {

      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
      }

   if (existe) {
       this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
       mensaje = 'Removido de favoritos';

      } else {
        this.peliculas.push(pelicula);
        mensaje = 'Agregada a favoritos';
      }

   this.storage.set('peliculas', this.peliculas);
   this.presentToast(mensaje);
   return !existe;
  }

async cargarFavoritos() {
  const peliculas = await this.storage.get('peliculas');
  this.peliculas = peliculas || [];
  return this.peliculas;
}

async existePelicula(id) {

  await this.cargarFavoritos();
  const existe = this.peliculas.find(peli => peli.id === id);
  return (existe) ? true : false;
}
}
