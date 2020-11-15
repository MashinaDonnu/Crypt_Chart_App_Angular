import {Switch, Themes} from "../../interfaces"

export const switchesArr: Array<Switch> = [
  {
    name: 'Percent',
    key: 'percent',
  },
  {
    name: 'Percent change 1h',
    key: 'percent_change_1h'
  },
  {
    name: 'Percent change 24h',
    key: 'percent_change_24h'
  },
  {
    name: 'Percent change 7d',
    key: 'percent_change_7d'
  },
]

export const themes: Themes = {
  blue: {
    backgroundColor: 'rgba(73, 104, 196, .5)',
    borderColor: '#4432a8',
  },
  green: {
    backgroundColor: 'rgba(61, 186, 113, .5)',
    borderColor: '#135736',
  },
  grey: {
    backgroundColor: 'rgba(179, 179, 179, .5)',
    borderColor: '#686968',
  }
}
