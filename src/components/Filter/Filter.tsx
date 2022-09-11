import React, {
  ChangeEvent, FC, useState,
} from 'react';
import {
  FormControl,
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';
import { RegionsFilter } from '../../types/RegionsFilter';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectors } from '../../app/store';
import { setAppliedQuery, setFilterType } from '../../features/filterSlice';

export const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const { filterType } = useAppSelector(selectors.getFilters);
  const [inputQuery, setInputQuery] = useState('');

  const applyQuery = useDebouncedCallback((value: string) => {
    dispatch(setAppliedQuery(value));
  }, 300);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputQuery(event.target.value);
    applyQuery(event.target.value);
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={12} sm={5} md={2}>
        <TextField
          fullWidth
          label="Country"
          variant="outlined"
          margin="normal"
          value={inputQuery}
          onChange={handleQueryChange}
        />
      </Grid>
      <Grid item xs={0} sm={2} md={8} />
      <Grid item xs={12} sm={5} md={2}>

        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            value={filterType}
            label="Region"
            onChange={(event) => {
              dispatch(setFilterType(event.target.value));
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={RegionsFilter.Africa}>Africa</MenuItem>
            <MenuItem value={RegionsFilter.Americas}>Americas</MenuItem>
            <MenuItem value={RegionsFilter.Asia}>Asia</MenuItem>
            <MenuItem value={RegionsFilter.Europe}>Europe</MenuItem>
            <MenuItem value={RegionsFilter.Oceania}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
