
import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  private libros:Libros[] = [
    {
        libro: "King Ping",
        autor: "John Doe",
        paginas: 1400,
        editorial: "DC comics"
    },
    {
        libro: "Gang of Four",
        autor: "Erick Gamma",
        paginas: 395,
        editorial: "Wesley"
    }
  ];

  constructor() {
    console.log("Servicio libros!!!");
  }

  getLibros(): Libros[] {
    return this.libros;
  }

  addLibros(libro: Libros): void {
     this.libros.push(libro);
  }

  editlibros(libro: Libros, id: number): void {
    this.libros[id] = libro;
 }

  deleteLibro( libro: Libros ): Libros[] {
    const lb = this.libros.filter( (data) => data != libro );
    this.libros = lb;
    return this.libros;
  }

}


export interface Libros{
  libro: string;
  autor: string;
  paginas: number;
  editorial: string;
};
