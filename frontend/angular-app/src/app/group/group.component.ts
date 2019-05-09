import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {equal, Group} from "../data";
import {Events, SelectionService} from "../selection.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit, OnDestroy {
  @Input() data: Group[];
  selectedItem: Group;
  private expand = false;
  private subscription = new Subscription();

  constructor(private selectionService: SelectionService) {
    this.subscription.add(this.selectionService.subscribe<Group>(Events.GROUP_SELECTED, value => {
      this.selectedItem = value
    }));

    this.subscription.add(this.selectionService.subscribe<boolean>(Events.EXPAND_ALL, value => {
      this.expand = value
    }));
  }

  ngOnInit() {
  }

  isPanelExpanded(item: Group): boolean {
    return this.expand === true || equal(this.selectedItem, item);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
