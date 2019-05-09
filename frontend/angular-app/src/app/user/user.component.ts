import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {equal, User} from "../data";
import {Subscription} from "rxjs";
import {Events, SelectionService} from "../selection.service";
import {Optional} from "typescript-optional";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() data: User[] = [];
  selectedItem: User;
  private expand = false;
  private subscription = new Subscription();

  constructor(private selectionService: SelectionService) {

  }

  ngOnInit() {
    this.subscription.add(this.selectionService.subscribe<User>(Events.USER_SELECTED, value => {
      this.selectedItem = value;
      if (this.data && this.data.find(u => u === value)) {
        this.scrollToSelectedItem(this.getId(this.selectedItem));
      }
    }));

    this.subscription.add(this.selectionService.subscribe<boolean>(Events.EXPAND_ALL, value => {
      this.expand = value
    }));
  }

  private scrollToSelectedItem(id: string) {
    setTimeout(() => Optional.ofNullable(document.getElementById(id))
      .ifPresent(element => element.scrollIntoView({block: "center"})), 1);
  }

  isPanelExpanded(item: User): boolean {
    return this.expand === true || equal(this.selectedItem, item);
  }

  getId(item: User): string {
    return `${item ? item.id : ''}_item`;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
