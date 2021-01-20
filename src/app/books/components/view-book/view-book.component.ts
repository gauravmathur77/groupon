import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  
  @Input() book: any;

  constructor() { }

  ngOnInit(): void {
  }

}
