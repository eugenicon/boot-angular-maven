import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as Lodash from "lodash";
import {Optional} from "typescript-optional";

export class User {
  id: number;
  name: string;
  age: number;
}

export class Group {
  id: number;
  name: string;
  users: User[];
}

export const USER_DATA: User[] = [
  {id: 1, name: 'User', age: 12},
  {id: 2, name: 'ololo', age: 42},
  {id: 3, name: 'qwe', age: 33},
  {id: 4, name: 'asd', age: 44},
  {id: 5, name: 'qaz', age: 55},
  {id: 6, name: 'qeqeqe', age: 66},
  {id: 7, name: 'zazaz', age: 2},
  {id: 8, name: 'dddd', age: 11},
  {id: 9, name: 'qqqq', age: 17},
  {id: 10, name: 'ffffuuu', age: 43},
  {id: 11, name: 'User', age: 12},
  {id: 12, name: 'ololo', age: 42},
  {id: 13, name: 'qwe', age: 33},
  {id: 14, name: 'asd', age: 44},
  {id: 15, name: 'qaz', age: 55},
  {id: 16, name: 'qeqeqe', age: 66},
  {id: 17, name: 'zazaz', age: 2},
  {id: 18, name: 'dddd', age: 11},
  {id: 19, name: 'qqqq', age: 17},
  {id: 20, name: 'ffffuuu', age: 43},
];

@Component({
  selector: 'app-anchor-page',
  templateUrl: './anchor-page.component.html',
  styleUrls: ['./anchor-page.component.scss']
})
export class AnchorPageComponent implements OnInit {
  data: User[] = [];
  selectedItem: User;

  constructor(router: Router) {
    Optional.ofNullable(router.getCurrentNavigation().extras.state)
      .ifPresent(state => this.selectedItem = state['selectedItem']);
  }

  ngOnInit() {
    setTimeout(() => this.setData(USER_DATA), 1000);
  }

  private setData(data: User[]) {
    this.data = data;
    this.scrollToSelectedItem();
  }

  private scrollToSelectedItem() {
    setTimeout(() =>
      Optional.ofNullable(document.getElementById(this.getId(this.selectedItem)))
        .ifPresent(element => element.scrollIntoView({behavior: "smooth"})), 1);
  }

  isPanelSelected(item: User): boolean {
    return Lodash.eq(this.selectedItem, item);
  }

  getId(item: User): string {
    return `${item ? item.id : ''}_item`;
  }
}
