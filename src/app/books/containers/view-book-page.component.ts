import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as fromBooks from '../reducers';

@Component({
  selector: 'app-view-book-page',
  template: `<app-view-book [book] = "book[0]"></app-view-book>`,
  styles: [],
})
export class ViewBookPageComponent implements OnInit {

  public id: string;

  public book: any;

  constructor(private route: ActivatedRoute,
    private store: Store<any>) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getDetails();
  }

  getDetails() {
    this.store.pipe(select(fromBooks.getBooksListData)).subscribe((books) => {
      this.book = books.filter((book) =>
        book.id == this.id
      )
    });
  }
}
