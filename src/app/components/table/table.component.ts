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
  items: Data[]
  tableData = tableData
  sortKey = null
  sortOrder = 0
  searchStr = ''

  constructor(public getDataService: GetDataService) { }

  ngOnInit(): void {
    this.items = this.getDataService.data.data[0].entries
    console.log('Table component:', this.items)
  }

  sortHandler(th) {
    const sortType = th.dataset.sortType
    const key = th.dataset.name
    if (this.sortKey !== key) {
      this.sortOrder = 0
    }
    this.sortKey = key


    switch (sortType) {
      case 'number': {
        this.items = this.items.sort((a, b) => {
          return a[key] - b[key]
        })
        break
      }
      case 'string': {
        this.items = this.items.sort((a, b) => {
          const first = a[key].toLowerCase(), second = b[key].toLowerCase()
          if (first < second)
            return -1
          if (first > second)
            return 1
          return 0
        })
      }
    }

    if (this.sortOrder === 2) {
      this.sortOrder = 1
    } else {
      this.sortOrder++
    }
    if (this.sortOrder === 2) {
      this.items.reverse()
    }
    console.log(this.sortOrder)
  }
}
