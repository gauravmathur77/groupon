import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromBooks from '../reducers';

@Component({
  selector: 'app-books-page',
  template: `<app-books-list
  [books] = "booksList$ | async"
  >
  </app-books-list>
  `,
  styles: [],
})
export class BooksPageComponent implements OnInit {

  
  booksList$ = this.store.pipe(select(fromBooks.getBooksListData));

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }
}
