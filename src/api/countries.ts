import { RegionsFilter } from '../types/RegionsFilter';
import { Country, CountryDetails } from '../types/Country';

const BASE_URL = 'https://restcountries.com/v3.1';

export const ENDPOINTS = {
  all: '/all',
  byRegionName: (region: RegionsFilter) => `/region/${region}`,
  byName: (name: string) => `/name/${name}`,
  byCode: (code: string) => `/alpha/${code}`,
};

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const request = <T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> => {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};

export const client = {
  get: <T>(url: string) => request<T>(url),
};

export const getCountriesByRegion = (region: RegionsFilter) => {
  return client.get<Country[]>(ENDPOINTS.byRegionName(region));
};

export const getCountryByName = (name: string) => {
  return client.get<CountryDetails[]>(ENDPOINTS.byName(name));
};

export const getCountryByCode = (code: string) => {
  return client.get<Country[]>(ENDPOINTS.byCode(code));
};
