import { Component, OnInit } from '@angular/core';
import { LibrosService, Libros } from '../servicios/libros.services';
import { Router } from '../../../node_modules/@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './librosNew.component.html',
  styleUrls: ['./librosNew.component.css']
})
export class NewComponent implements OnInit{
    public newForm: FormGroup;
    public PATTERN_NUMERICO = /^[0-9]*$/;
  constructor(private _libros: LibrosService, private router: Router) {
  }

  ngOnInit() {
    const libro = new FormControl('', [Validators.required]);
    const autor = new FormControl('', [Validators.required]);
    const paginas = new FormControl('', [Validators.required, Validators.pattern(this.PATTERN_NUMERICO)]);
    const editorial = new FormControl('', [Validators.required]);

    this.newForm = new FormGroup({
     libro: libro,
     autor: autor,
     paginas: paginas,
     editorial: editorial
    });
  }

  public regresar() {
    this.router.navigate(['./list']);
  }

  public add() {
    const newLibro: Libros = {
        libro: this.newForm.controls['libro'].value,
        autor: this.newForm.controls['autor'].value,
        paginas: this.newForm.controls['paginas'].value,
        editorial: this.newForm.controls['editorial'].value,
    }

    this._libros.addLibros( newLibro );
    this.regresar();
  }
}
