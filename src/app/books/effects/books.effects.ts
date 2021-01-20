import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap, mergeMap, startWith, switchMap } from 'rxjs/operators';
import * as Books from '../actions/books.actions';

import { BooksService } from '../services/books.service';

@Injectable()
export class BooksEffects {

  @Effect()
  booksSend$ = this.actions$.pipe(
      ofType(Books.GET_BOOKS_SEND),
      exhaustMap(() =>
        this.booksService.getBooks().pipe(
          mergeMap((books: any) => {
            return [
              new Books.GetBooksSuccess({ books })
            ];
          }),
          catchError(error => {
            return [
              new Books.GetBooksFailure({ error })
            ];
          })
        )
      ));



  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) { }
}
