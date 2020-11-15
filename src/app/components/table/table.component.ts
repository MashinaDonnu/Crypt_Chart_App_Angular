import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../../services/getData.service";
import {Data} from "../../interfaces";
import {tableData} from './shared'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  items: Data;
  tableData = tableData
  constructor(public getDataService: GetDataService) { }

  ngOnInit(): void {
    this.items = this.getDataService.data.data[0].entries;
    console.log('Table component:', this.items)
  }



}
