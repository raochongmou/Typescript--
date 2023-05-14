interface IIndexType {
  [index: number]: string
}

const frontLang: IIndexType = {
  0: 'HTML',
  1: 'CSS',
  2: 'JS'
} 

interface ILangYear {
  [index: string]: number
}

const langYear: ILangYear = {
  'C': 1972,
  'JAVA': 1995,
  'JAVASCRIPT': 1996,
  'TYPESCRIPT': 2014
}
