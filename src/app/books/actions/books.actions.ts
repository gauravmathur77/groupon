import { Action } from '@ngrx/store';


export const GET_BOOKS_SEND = '[Books] Books Send';
export const GET_BOOKS_SUCCESS = '[Books] Books Success';
export const GET_BOOKS_FAILURE = '[Books] Books Failure';


export const ADD_BOOKS_SEND = '[Books] Add Books Send';

export const EDIT_BOOKS_SEND = '[Books] Edit Books Send';

export class GetBooksSend implements Action {
    readonly type = GET_BOOKS_SEND;

    constructor() { }
}

export class GetBooksSuccess implements Action {
    readonly type = GET_BOOKS_SUCCESS;

    constructor(public payload: any) { }
}

export class GetBooksFailure implements Action {
    readonly type = GET_BOOKS_FAILURE;

    constructor(public payload: any) { }
}

export class AddBooksSend implements Action {
    readonly type = ADD_BOOKS_SEND;

    constructor(public payload: any) { }
}

export class EditBooksSend implements Action {
    readonly type = EDIT_BOOKS_SEND;

    constructor(public payload: any) { }
}

export type Actions =
    | GetBooksSend
    | GetBooksSuccess
    | GetBooksFailure
    | AddBooksSend
    | EditBooksSend;

