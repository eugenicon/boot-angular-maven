import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Events, SelectionService} from "../selection.service";
import {User, USER_DATA} from "../data";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  data: User[] = USER_DATA;
  selectedItem: User;

  constructor(private router: Router, private selectionService: SelectionService) {
  }

  ngOnInit() {
    this.selectionService.subscribe<User>(Events.USER_SELECTED, value => {
      this.selectedItem = value
    });
  }

  go(item: User) {
    this.selectionService.submit(Events.GROUP_SELECTED, item.group);
    this.selectionService.submit(Events.USER_SELECTED, item);
    return this.router.navigateByUrl('page/anchor');
  }
}
