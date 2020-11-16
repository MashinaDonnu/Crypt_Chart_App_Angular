import {ViewData} from "../../interfaces";

export const tableData: Array<ViewData> = [
  {
    name: 'Position',
    key: 'position',
    sortType: 'number'
  },
  {
    name: 'Name',
    key: 'name',
    sortType: 'string'
  },
  {
    name: 'Symbol',
    key: 'symbol',
    sortType: 'string'
  },
  {
    name: 'Percent',
    key: 'percent',
    sortType: 'number'
  },
  {
    name: 'Percent Change 1h',
    key: 'percent_change_1h',
    sortType: 'number'
  },
  {
    name: 'Percent Change 24h',
    key: 'percent_change_24h',
    sortType: 'number'
  },
  {
    name: 'Percent Change 7d',
    key: 'percent_change_7d',
    sortType: 'number'
  }
]
