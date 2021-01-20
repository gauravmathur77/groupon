import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksPageComponent  } from './containers/books-page.component';
import { ViewBookPageComponent  } from './containers/view-book-page.component';
import { AddBookPageComponent  } from './containers/add-book-page.component';

const routes: Routes = [
  {
    path: '',
    component: BooksPageComponent,
  },
  {
    path: 'detail/:id',
    component: ViewBookPageComponent,
  },
  {
    path: 'add',
    component: AddBookPageComponent,
  },
  {
    path: 'edit/:id',
    component: AddBookPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
