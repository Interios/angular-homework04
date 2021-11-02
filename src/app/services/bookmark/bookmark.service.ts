import { Injectable } from '@angular/core';

interface TypeBookmark {
  title: string,
  marks: string[]
}
interface TypeResultItem {
  value: string,
  index: number
}

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  elements = {
    title: "Legend of homework 04",
    marks: ["legend 01", "legend 02", "legend 03"]
  }

  constructor() { }

  set(item: TypeResultItem) {
    this.elements.marks[item.index] = item.value;
  }

  get(): TypeBookmark {
    return this.elements;
  }

  remove(item: TypeResultItem): void {
    this.elements.marks.splice(item.index, 1);
  }

  add(item: TypeResultItem): void {
    this.elements.marks.push(item.value)
  }

  debug(): void {
    console.log(this.elements);
  }
}
