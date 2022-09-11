import React, { FC, memo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Grid from '@mui/material/Grid';
import { Country } from '../../types/Country';
import { CountryLink } from '../CountryLink';

interface Props {
  country: Country;
}

export const CountryCard: FC<Props> = memo(({ country }) => {
  const {
    name, flags, region, population, capital,
  } = country;

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={flags.svg}
          alt={name.common}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.common}
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <SouthAmericaIcon />
              </ListItemIcon>

              <ListItemText primary={`Region: ${region}`} />
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>

              <ListItemText primary={`Population: ${population}`} />
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>

              <ListItemText primary={`Capital: ${capital}`} />
            </ListItem>
          </List>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: '#777' }}>
            <CountryLink countryName={name.common} text="Learn more" />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
});
