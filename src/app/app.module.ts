import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './libros-list/librosList.component';
import { APP_ROUTING } from './app.routes';
import { LibrosService } from './servicios/libros.services';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NewComponent } from './libros-new/librosNew.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { EditComponent } from './libros-edit/librosEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
