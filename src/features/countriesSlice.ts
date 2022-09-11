/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country } from '../types/Country';
import { getCountriesByRegion } from '../api/countries';

interface CurrentPostState {
  countries: { [key: string] : Country[] };
  countriesIsLoading: boolean;
  countriesError: string;
}

const initialState: CurrentPostState = {
  countries: {},
  countriesIsLoading: false,
  countriesError: '',
};

export const fetchCountriesByRegion = createAsyncThunk(
  'countries/fetch_countriesByRegion',
  getCountriesByRegion,
);

export const countriesSlice = createSlice({
  name: 'countriesState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesByRegion.pending, (state) => {
      state.countriesIsLoading = true;
    });

    builder.addCase(fetchCountriesByRegion.fulfilled, (state, action) => {
      state.countries[action.meta.arg] = action.payload;
      state.countriesIsLoading = false;
    });

    builder.addCase(fetchCountriesByRegion.rejected, (state, action) => {
      state.countriesError = action.error.name || '';
      state.countriesIsLoading = false;
    });
  },
});

export default countriesSlice.reducer;
