import { Component, OnInit } from '@angular/core';
import { LibrosService, Libros } from '../servicios/libros.services';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './librosEdit.component.html',
  styleUrls: ['./librosEdit.component.css']
})
export class EditComponent implements OnInit{
    public newForm: FormGroup;
    public listLibros: Libros[];
    public sub: any;
    public id: any;
    public PATTERN_NUMERICO = /^[0-9]*$/;
  constructor(private _libros: LibrosService, private router: Router,
              private route: ActivatedRoute) {
    this.listLibros = _libros.getLibros();
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      const libroEditar = this.listLibros[this.id];

      const libro = new FormControl(libroEditar.libro, [Validators.required]);
      const autor = new FormControl(libroEditar.autor, [Validators.required]);
      const paginas = new FormControl(libroEditar.paginas, [Validators.required, Validators.pattern(this.PATTERN_NUMERICO)]);
      const editorial = new FormControl(libroEditar.editorial, [Validators.required]);
   
      this.newForm = new FormGroup({
       libro: libro,
       autor: autor,
       paginas: paginas,
       editorial: editorial
      });
   });

  }

  public regresar() {
    this.router.navigate(['./list']);
  }

  public edit() {
    const newLibro: Libros = {
        libro: this.newForm.controls['libro'].value,
        autor: this.newForm.controls['autor'].value,
        paginas: this.newForm.controls['paginas'].value,
        editorial: this.newForm.controls['editorial'].value,
    }

    this._libros.editlibros( newLibro, this.id );
    this.regresar();
  }
}
