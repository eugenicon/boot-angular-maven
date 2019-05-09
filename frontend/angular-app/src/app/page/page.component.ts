import { Component, OnInit } from '@angular/core';
import {User, USER_DATA} from "../anchor-page/anchor-page.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  data: User[] = USER_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(item: User) {
    return this.router.navigateByUrl('page/anchor', {state: {'selectedItem': item}});
  }
}
