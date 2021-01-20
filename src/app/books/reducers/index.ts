import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import * as fromGetBooks from './books-reducer';

export interface BooksState {
  booksList: fromGetBooks.State
}

export interface State extends fromRoot.State {
  books: BooksState;
}

export const reducers = {
  booksList: fromGetBooks.reducer,
};


export const selectBooksState = createFeatureSelector<State, BooksState>('books');

export const selectBooksListState = createSelector(
  selectBooksState,
  (state: BooksState) => state.booksList
);

export const getBooksListError = createSelector(
  selectBooksListState,
  fromGetBooks.getError
);
export const getBooksListPending = createSelector(
  selectBooksListState,
  fromGetBooks.getPending
);
export const getBooksListData = createSelector(
  selectBooksListState,
  fromGetBooks.getBooksListing
);


