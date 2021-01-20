import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }


  getBooks() {
    return this.http.get(
      `http://localhost:3001/books`
    ).pipe(
      map((resp) => resp)
    );
  }

}
