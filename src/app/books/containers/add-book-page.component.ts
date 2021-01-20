import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import * as Books from '../actions/books.actions';
import * as fromBooks from '../reducers';

@Component({
  selector: 'app-add-book-page',
  template: `<app-add-book
  [book] = "book"
  [page] = "page"
  (submitted) = "addBook($event)"
  (editSubmit) = "editSubmit($event)"
  >
  </app-add-book>`,
  styles: []
})
export class AddBookPageComponent implements OnInit {

  public id: string;
  
  public book: any;

  public page : string;

  constructor(private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.router.url.indexOf('edit') > -1) {
      this.id = this.route.snapshot.params.id;
      this.page = 'edit';
      this.getDetails()
    } else {
      this.page = 'add';
    }
  }

  addBook($event){
    this.store.dispatch(new Books.AddBooksSend($event));
  }

  getDetails() {
    this.store.pipe(select(fromBooks.getBooksListData)).subscribe((books) => {
      this.book = books.filter((book) =>
        book.id == this.id
      )
    });
    this.book = this.book[0];
  }

  editSubmit($event) {
    this.store.dispatch(new Books.EditBooksSend($event));
  }
}
