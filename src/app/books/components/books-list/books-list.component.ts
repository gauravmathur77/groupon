import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input() set books(books: any) {
    if (books) {
      this.bookList = books;
      this.fullBookList = books;
    } else {
      this.bookList = [];
    }
  };

  public bookList: any = [];

  public fullBookList: any = [];

  public searchForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  viewBook(id) {
    this.router.navigate([`/books/detail/${id}`]);
  }

  editBook(id) {
    this.router.navigate([`/books/edit/${id}`]);
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      name: ['', []]
    });
  }

  filter($event) {
    if (this.searchForm.get('name').value) {
      this.bookList = this.fullBookList.filter((book) => { return book.volumeInfo.title.indexOf(this.searchForm.get('name').value) > -1 })
    } else {
      this.bookList = this.fullBookList;
    }
  }
}
