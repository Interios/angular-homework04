import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Output() onHandles = new EventEmitter<any>();
  @Input() valueItem: string = "";
  @Input() indexItem: number = 0;

  is_edit: boolean = false;

  constructor() { }
  ngOnInit(): void {}

  handleEdit = (): void => {
    this.is_edit = !this.is_edit;
  }

  handleSave = (type: string): void => {
    this.handleBook(type);
    this.handleEdit();
  }
  
  handleRemove = (type: string): void => {
    this.handleBook(type);
  }
  
  handleBook = (type: string): void => {
    this.onHandles.emit({
      type: type,
      state: {
        value: this.valueItem,
        index: this.indexItem
      }
    });
  }
}
