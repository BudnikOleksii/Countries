import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DomainIcon from '@mui/icons-material/Domain';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TranslateIcon from '@mui/icons-material/Translate';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Button from '@mui/material/Button';
import { getCountryByCode, getCountryByName } from '../../api/countries';
import { CountryDetails } from '../../types/Country';
import { CountryLink } from '../CountryLink';

export const CountryModal: FC = () => {
  const { name = '' } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<CountryDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);

    getCountryByName(name)
      .then((res) => setCountry(res[0]))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [name]);

  useEffect(() => {
    if (country && country.borders) {
      const requests = country.borders.map(countryCode => (
        getCountryByCode(countryCode)
      ));

      Promise.all(requests)
        .then(res => {
          const result: string[] = [];

          res.forEach(border => {
            result.push(border[0].name.common);
          });

          setBorderCountries(result);
        })
        .catch(setError);
    }
  }, [country]);

  return (
    <Modal
      open={Boolean(name)}
      onClose={() => navigate('/')}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <Box sx={{
        width: '80vw', backgroundColor: '#fff',
      }}
      >
        {isLoading && <LinearProgress />}

        {country && !error && (
          <Paper elevation={16} sx={{ padding: '20px', textAlign: 'center', backgroundColor: 'eee' }}>
            <Typography gutterBottom variant="h3" component="div" sx={{ width: '100%' }}>
              {country.name.common}
            </Typography>

            <div className="flex-between">
              <div className="card-block">
                <img className="card-block__img" src={country.flags.svg} alt={country.name.common} />

              </div>

              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <BadgeIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Native Name: ${Object.values(country.name.nativeName)[0].common}`} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Population: ${country.population}`} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <TravelExploreIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Region: ${country.region}`} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <SouthAmericaIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Sub Region: ${country.subregion}`} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <LocationCityIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Capital: ${country.capital}`} />
                </ListItem>
              </List>

              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <DomainIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Top Level Domain: ${country.tld[0]}`} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <CurrencyExchangeIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Currencies: ${Object.values(country.currencies)[0].name}`} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <TranslateIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Languages: ${Object.values(country.languages).join(', ')}`} />
                </ListItem>
              </List>
            </div>

            {borderCountries.length > 0 && (
              <div className="flex-between" style={{ marginTop: '20px' }}>
                { 'Boarders: '}
                {borderCountries.map(border => (
                  <Button variant="outlined" size="small" sx={{ color: '#777' }} key={border}>
                    <CountryLink countryName={border} text={border} />
                  </Button>
                ))}
              </div>
            )}
          </Paper>
        )}
      </Box>
    </Modal>
  );
};
