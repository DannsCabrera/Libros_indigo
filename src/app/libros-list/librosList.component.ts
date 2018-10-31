import { Component } from '@angular/core';
import { LibrosService, Libros } from '../servicios/libros.services';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './librosList.component.html',
  styleUrls: ['./librosList.component.css']
})
export class ListComponent {
    public listLibros: Libros[] = [];
  constructor(private libros: LibrosService, private router: Router) {
      console.log('list');
      this.listLibros = libros.getLibros();
      this.listLibros = [...this.listLibros]
  }

  public new() {
    this.router.navigate(['./new']);
  }

  public borrar( libro: Libros ) {
      this.listLibros = this.libros.deleteLibro(libro);
      this.listLibros = [...this.listLibros];
  }

  public editar(libro: Libros) {
    var id = this.listLibros.indexOf(libro);
    this.router.navigate(['./edit', id]);
  }
}
