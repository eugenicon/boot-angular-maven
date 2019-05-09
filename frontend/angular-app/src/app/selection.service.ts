import {Injectable} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import * as util from 'util'

export enum Events {
  USER_SELECTED = 'USER_SELECTED',
  GROUP_SELECTED = 'GROUP_SELECTED',
  EXPAND_ALL = 'EXPAND_ALL',
}

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private selectionData = new Map<string, BehaviorSubject<any>>();

  constructor() {

  }

  get<T>(event: string): T {
    return this.getSubject(event).getValue();
  }

  submit(event: string, data: any) {
    console.log(`submitting ${event}: ${util.inspect(data)}`);
    this.getSubject(event).next(data);

    let map = new Map();
    this.selectionData.forEach((value, key) => map.set(key, value.getValue()));
    console.log(map);
  }

  clear(event: string) {
    this.submit(event, null);
  }

  subscribe<T>(event: string, sub: (value: T) => void): Subscription {
    return this.getSubject(event).subscribe(sub);
  }

  private getSubject(event: string) {
    if (!this.selectionData.get(event)) {
      console.log(`new subject ${event}`);
      this.selectionData.set(event, new BehaviorSubject(null))
    }
    return this.selectionData.get(event);
  }
}
