import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  data: Array<any>;
  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.data = this.dataService.arrItem; 
  }
}