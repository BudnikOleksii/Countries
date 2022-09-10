import React, { useEffect, useMemo, useState } from 'react';
import './App.scss';
import { Grid, Paper } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useSearchParams } from 'react-router-dom';
import { client, ENDPOINTS } from './api/countries';
import { CountryCard } from './components/CountryCard';
import { Filter } from './components/Filter';
import { Country } from './types/Country';

export const App: React.FC = () => {
  const [searchParams] = useSearchParams();
  const appliedQuery = searchParams.get('query') || '';
  const region = searchParams.get('region') || '';
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    client.get<Country[]>(ENDPOINTS.all)
      .then(setCountries)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  const preparedCountries = useMemo(() => {
    const query = appliedQuery.toLowerCase();

    return countries.filter(country => (
      country.region.includes(region) && country.name.common.toLowerCase().includes(query)
    ));
  }, [appliedQuery, region, countries]);

  return (
    <div className="app">
      <Paper elevation={8}>
        <h1 className="app__header">Where in the world?</h1>
      </Paper>

      {isLoading && <LinearProgress />}

      {!error && (
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
