import { Pipe, PipeTransform } from '@angular/core';
const url = 'https://image.tmdb.org/t/p';
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tam: string = '/w500'): string {

if (img) {
  return `${url}${tam}${img}` ;
  } else {
    return './assets/shapes.svg';
  }
  }
}
