import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  countryName: string,
  text: string,
};

export const CountryLink: FC<Props> = memo(({ countryName, text }) => (
  <Link
    to={`/country/${countryName}`}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    {text}
  </Link>
));
