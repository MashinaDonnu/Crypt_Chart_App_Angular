export interface Data {
  success: boolean
  data: Array<any>
}

export interface ViewData {
  name: string
  key: string
  sortType?: string
}

interface ThemeItem {
  backgroundColor: string
  borderColor: string
}

export interface Themes {
  [key: string]: ThemeItem
}
