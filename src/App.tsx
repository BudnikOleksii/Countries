import React, { useEffect } from 'react';
import './App.scss';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import { CountryCard } from './components/CountryCard';
import { Filter } from './components/Filter';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchAllCountries } from './features/countriesSlice';
import { selectors } from './app/store';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { countriesError, countriesIsLoading } = useAppSelector(selectors.getCountries);
  const preparedCountries = useAppSelector(selectors.getPreparedCountries);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  return (
    <div className="app">
      <Paper elevation={8}>
        <h1 className="app__header">Where in the world?</h1>
      </Paper>

      {countriesIsLoading && <LinearProgress />}

      {!countriesError && !countriesIsLoading && (
        <Paper elevation={16} style={{ padding: '20px' }}>
          <Filter />
          <Grid container spacing={2}>
            {preparedCountries.map(country => (
              <CountryCard country={country} key={country.name.common} />
            ))}
          </Grid>
        </Paper>
      )}
    </div>
  );
};
