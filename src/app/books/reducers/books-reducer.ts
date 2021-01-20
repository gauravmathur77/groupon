import * as Books from '../actions/books.actions';

export interface State {
    error: string | null;
    pending: boolean;
    books: any;
}

export const initialState: State = {
    error: null,
    pending: false,
    books: []
};

export function reducer(state = initialState, action: Books.Actions): State {
    switch (action.type) {
        case Books.GET_BOOKS_SEND: {
            return {
                ...state,
                error: null,
                pending: true,
            };
        }

        case Books.GET_BOOKS_SUCCESS: {
            return {
                ...state,
                error: null,
                pending: false,
                books: action.payload.books.items
            };
        }

        case Books.GET_BOOKS_FAILURE: {
            return {
                ...state,
                error: action.payload,
                pending: false,
            };
        }

        case Books.ADD_BOOKS_SEND: {
            state.books.push(action.payload)
            return state;
        }

        case Books.EDIT_BOOKS_SEND: {
            let index = state.books.findIndex((book)=> book.id == action.payload.id);
            state.books[index].volumeInfo.title = action.payload.model.title;
            state.books[index].volumeInfo.description = action.payload.model.description;
            state.books[index].volumeInfo.publisher = action.payload.model.publisher;
            state.books[index].volumeInfo.publishedDate = action.payload.model.publishedDate;
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
export const getBooksListing = (state: State) => state.books;
