import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular forms
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
// Components

import { BooksPageComponent } from './containers/books-page.component';
import { ViewBookPageComponent } from './containers/view-book-page.component';
import { AddBookPageComponent } from './containers/add-book-page.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';

import { BooksService } from './services/books.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksPageComponent,
    ViewBookPageComponent,
    AddBookPageComponent,
    BooksListComponent,
    ViewBookComponent,
    AddBookComponent
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
