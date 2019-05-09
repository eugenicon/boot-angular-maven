import {Component, OnInit} from '@angular/core';
import {Group, GROUP_DATA} from "../data";
import {Events, SelectionService} from "../selection.service";

@Component({
  selector: 'app-anchor-page',
  templateUrl: './anchor-page.component.html',
  styleUrls: ['./anchor-page.component.scss']
})
export class AnchorPageComponent implements OnInit {
  data: Group[] = GROUP_DATA;

  constructor(private selectionService: SelectionService) {

  }

  ngOnInit() {

  }

  toggleExpansion() {
    this.selectionService.submit(Events.EXPAND_ALL, !this.selectionService.get<boolean>(Events.EXPAND_ALL));
  }
}
