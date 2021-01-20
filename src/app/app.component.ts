import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


import * as Books from './books/actions/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'groupon';

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(new Books.GetBooksSend());
  }
}
