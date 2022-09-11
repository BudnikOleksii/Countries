export interface Country {
  name: {
    common: string,
  },
  flags: {
    svg: string,
  },
  population: number,
  region: string,
  capital: string[],
}

export interface CountryDetails extends Country{
  name: {
    common: string,
    nativeName: {[key: string]: {
      common: string
    }},
  },
  subregion: string,
  borders: string[],
  currencies: {[key: string]: {
    name: string
  }},
  languages: {[key: string]: string},
  tld: string[],
}
