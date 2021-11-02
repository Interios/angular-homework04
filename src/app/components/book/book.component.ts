import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../services/bookmark/bookmark.service'

interface TypeBookmark {
  title: string,
  marks: string[]
}
interface TypeBookmarkItem {
  value: string,
  index: number
}
interface TypeResultItem {
  type: string,
  state: TypeBookmarkItem
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(public bookmarkService: BookmarkService) {}

  public bookmark: TypeBookmark = {
    title: "",
    marks: []
  }

  ngOnInit(): void {
    this.onUpdateBook();
  }

  onUpdateBook = () => {
    this.bookmark = this.bookmarkService.get();
  }

  onAddBook = () => {
    let new_book = {
      type: "add",
      state: {
        value: "new legend",
        index: this.bookmark.marks.length + 1
      }
    }
    this.onSwitchHandler(new_book);
  }
  
  onSwitchHandler = (item: TypeResultItem): void => {
    switch(item.type) {
      case "add":
        this.bookmarkService.add(item.state);
        break;
      case "remove":
        this.bookmarkService.remove(item.state);
        break;
      case "change":
        this.bookmarkService.set(item.state);
        break;
    }
    this.onUpdateBook();
  }
}
