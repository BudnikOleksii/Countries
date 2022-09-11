/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RegionsFilter } from '../types/RegionsFilter';

interface FilterState {
  filterType: RegionsFilter | '',
  appliedQuery: string,
}

const initialState: FilterState = {
  filterType: '',
  appliedQuery: '',
};

const filterSlice = createSlice({
  name: 'filterState',
  initialState,
  reducers: {
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
    setAppliedQuery: (state, action) => {
      state.appliedQuery = action.payload;
    },
  },
});

export const { setFilterType, setAppliedQuery } = filterSlice.actions;
export default filterSlice.reducer;
