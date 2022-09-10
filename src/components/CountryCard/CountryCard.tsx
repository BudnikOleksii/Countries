import React, { FC, memo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Country } from '../../types/Country';

interface Props {
  country: Country;
}

export const CountryCard: FC<Props> = memo(({ country }) => {
  const {
    name, flags, region, population, capital,
  } = country;

  return (
    <Grid item xs={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={flags.svg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.common}
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={`Region: ${region}`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={`Population: ${population}`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={`Capital: ${capital}`} />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
});
