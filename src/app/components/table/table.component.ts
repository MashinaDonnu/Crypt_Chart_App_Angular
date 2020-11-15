import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../../services/getData.service";
import {Data} from "../../interfaces";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: Data;
  constructor(public getDataService: GetDataService) { }

  ngOnInit(): void {
    this.data = this.getDataService.data;
    console.log('Table component:', this.data)
  }

}
