import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, OnChanges {

  @Input() book;

  @Input() page;
  
  @Output() submitted = new EventEmitter<any>();

  @Output() editSubmit = new EventEmitter<any>();

  addBookForm: FormGroup;

  formSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    if(this.page == 'edit') {
      this.setValues();
    } else {
      this.createForm();
    }
  }

  createForm() {
    this.addBookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      description: ['', [Validators.required]],
      publishedDate: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  submit(model, valid) {
    this.formSubmit = true;
    if (valid) {
      if(this.page == 'add') {
        let event = {
          id: Math.floor(Math.random() * 100000),
          volumeInfo: {
            ...model
          }
        }
        
        this.submitted.emit(event);
      } else {
        this.editSubmit.emit({'model':model, 'id': this.book.id})
      }
      this.router.navigate([`/books`]);
    }
  }

  setValues() {
    if(!this.addBookForm) {
      this.createForm();
    }
    this.addBookForm.patchValue({
      title: this.book.volumeInfo.title,
      publisher: this.book.volumeInfo.publisher,
      publishedDate: this.book.volumeInfo.publishedDate,
      description: this.book.volumeInfo.description,
    });
  }

  ngOnChanges(){
      if(this.book) {
        this.setValues();
      }
  }
}
