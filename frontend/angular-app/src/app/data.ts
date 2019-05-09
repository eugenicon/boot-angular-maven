import * as Lodash from "lodash";

export class User {
  id: number;
  name: string;
  age: number;
  group?: Group;
}

export class Group {
  id: number;
  name: string;
  users: User[];
}

export const GROUP_NAMES: string[] = [
  'Tribe', 'Group', 'Community', 'Admins', 'Team'
];

export const USER_NAMES: string[] = [
  'James', 'John', 'Stan', 'Andrew', 'Sindy', 'Ann', 'Jenn', 'Glen', 'Owen'
];

export const PREFIXES: string[] = [
  'Mega-', 'Koala-', 'Tiny-', 'Epic-', 'Regular-', 'Running-'
];

function random(max: number) {
  return Math.floor(Math.random() * max);
}

function any<T>(arr: T[]): T {
  return arr[random(arr.length)];
}

function groupBy<T, K>(list: T[], keyGetter: (item: T) => K): Map<K, T[]> {
  const map = new Map<K, T[]>();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

function generateGroups(num: number) {
  let groups: Group[] = [];
  for (let i = 0; i < num; i++) {
    groups.push({id: i, name: any(PREFIXES) + any(GROUP_NAMES), users: []})
  }
  return groups;
}

export const GROUP_DATA: Group[] = generateGroups(20);

function generateUsers(num: number) {
  let users: User[] = [];
  for (let i = 0; i < num; i++) {
    users.push({id: i, name: any(PREFIXES) + any(USER_NAMES), age: random(99), group: any(GROUP_DATA)})
  }
  let map = groupBy(users, user => user.group.id);
  GROUP_DATA.forEach(value => value.users = map.get(value.id))
  return users;
}

export const USER_DATA: User[] = generateUsers(100);

export function equal<T>(o1: T, o2: T): boolean {
  return Lodash.eq(o1, o2);
}
