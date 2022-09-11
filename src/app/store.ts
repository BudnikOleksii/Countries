import { configureStore } from '@reduxjs/toolkit';
import countriesStateReducer from '../features/countriesSlice';
import filterStateReducer from '../features/filterSlice';
import { Country } from '../types/Country';

export const store = configureStore({
  reducer: {
    countriesState: countriesStateReducer,
    filtersState: filterStateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const getPreparedCountries = (state: RootState) => {
  const { countries } = state.countriesState;
  const { filterType, appliedQuery } = state.filtersState;

  let visibleCountries: Country[] = [];
  const query = appliedQuery.toLowerCase();

  if (filterType) {
    visibleCountries = countries[filterType];
  } else {
    Object.values(countries).forEach(regionCountries => {
      visibleCountries.push(...regionCountries);
    });
  }

  return visibleCountries.filter(country => (
    country.name.common.toLowerCase().includes(query)
  ));
};

export const selectors = {
  getCountries: (state: RootState) => state.countriesState,
  getFilters: (state: RootState) => state.filtersState,
  getPreparedCountries,
};
