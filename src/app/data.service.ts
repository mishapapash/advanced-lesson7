import { Injectable } from '@angular/core';

interface IItem {
  name: string,
  count: number,
  price: number,
  expirationDate: string,
  category: string,
  message?: string
};

class Item implements IItem {
  name: string;
  count: number;
  price: number;
  expirationDate: string;
  category: string;
  message?: string;
};

let arrItem: Array<Item> = [
  { 
    name: 'Macallan Sherry Oak 25 Years Old',
    count: 3,
    price: 97000,
    expirationDate: '13/07/2030',
    category: 'Whiskey'
  },
  { 
    name: 'Macallan 18 Years Old',
    count: 3,
    price: 9800,
    expirationDate: '20/09/2028',
    category: 'Whiskey'
  },
  { 
    name: 'Macallan Fine Oak 21 Years Old',
    count: 2,
    price: 21720,
    expirationDate: '28/07/2027',
    category: 'Whiskey'
  },
  { 
    name: 'Macallan Triple Cask 12 Years Old',
    count: 21,
    price: 1988,
    expirationDate: '26/09/2028',
    category: 'Whiskey'
  },
  { 
    name: 'Dalmore 40 Years Old, 1966',
    count: 1,
    price: 415000,
    expirationDate: '10/06/2030',
    category: 'Whiskey'
  },
  { 
    name: 'Dalmore Trio',
    count: 10,
    price: 2000,
    expirationDate: '10/04/2021',
    category: 'Whiskey'
  },
  { 
    name: 'Glenmorangie 25 Years Old',
    count: 8,
    price: 27000,
    expirationDate: '13/07/2032',
    category: 'Whiskey'
  },
  { 
    name: 'Glenmorangie Original 10 Years Old',
    count: 12,
    price: 1060,
    expirationDate: '09/04/2021',
    category: 'Whiskey'
  },
  { 
    name: 'Jameson Irish Whiskey',
    count: 28,
    price: 520,
    expirationDate: '13/03/2021',
    category: 'Whiskey'
  },
  { 
    name: 'Chivas Regal 12 Years Old',
    count: 14,
    price: 1230,
    expirationDate: '22/03/2021',
    category: 'Whiskey'
  }
];

arrItem.forEach((value: Item, index: number) => {
  let currentDateString: string = new Date().toLocaleDateString();
  let expireDateArr = value.expirationDate.split("/");
  let currentDateArr = currentDateString.split(".");
  let currentDate: number = Number(currentDateArr[2])*365 + Number(currentDateArr[1])*30 + Number(currentDateArr[0]);
  let expireDate: number = Number(expireDateArr[2])*365 + Number(expireDateArr[1])*30 + Number(expireDateArr[0]);
  let checking = expireDate - currentDate;
  if(checking < 0) {
    value.message = 'red';
  }
  else if(checking > 0 && checking <= 2) {
    value.message = 'yellow';
  }
  else {
    value.message = 'white';
  }
})

@Injectable({
  providedIn: 'root'
})

export class DataService {
  arrItem = arrItem;
  constructor() { }
}
