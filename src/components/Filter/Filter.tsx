import React, {
  ChangeEvent, FC, useCallback, useState,
} from 'react';
import debounce from 'lodash.debounce';
import {
  FormControl,
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { RegionsFilter } from '../../types/RegionsFilter';

export const Filter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const appliedQuery = searchParams.get('query') || '';
  const region = searchParams.get('region') || '';
  const [inputQuery, setInputQuery] = useState(appliedQuery);

  const applyQuery = useCallback(
    debounce((query: string) => {
      if (query || region) {
        setSearchParams({ query, region });
      } else {
        setSearchParams({});
      }
    }, 500),
    [],
  );

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputQuery(event.target.value);
    applyQuery(event.target.value);
  };

  const handleFilterChange = (regionFilter: RegionsFilter | '') => {
    setSearchParams({
      query: appliedQuery,
      region: regionFilter,
    });
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={3}>
        <TextField
          fullWidth
          label="Country"
          variant="outlined"
          margin="normal"
          value={inputQuery}
          onChange={handleQueryChange}
        />
      </Grid>
      <Grid item xs={7} />
      <Grid item xs={2}>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            value={region}
            label="Region"
            onChange={(event) => handleFilterChange(event.target.value as RegionsFilter)}
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
