
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './libros-list/librosList.component';
import { NewComponent } from './libros-new/librosNew.component';
import { EditComponent } from './libros-edit/librosEdit.component';

const APP_ROUTES: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'list' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:false});
