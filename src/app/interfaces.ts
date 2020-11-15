export interface Data {
  success: boolean
  data: Array<any>
}

export interface Switch {
  name: string
  key: string
}

interface ThemeItem {
  backgroundColor: string
  borderColor: string
}

export interface Themes {
  [key: string]: ThemeItem
}
