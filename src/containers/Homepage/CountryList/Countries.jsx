import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CountryGrid } from './styles';
import { ROUTES } from '../../../utils/routes';

const Countries = ({ country }) => {
  const {
    flags: { png: flagPng },
    name: { common: commonName },
    population,
    area,
    region,
  } = country;
  return (
    <div className="countryRow">
      <Link to={ROUTES.COUNTRY.replace(':name', commonName)}>
        <CountryGrid>
          <img src={flagPng} alt="Flag" />
        </CountryGrid>
        <CountryGrid>{commonName}</CountryGrid>
        <CountryGrid>{population}</CountryGrid>
        <CountryGrid>{area}</CountryGrid>
        <CountryGrid hidden>{region}</CountryGrid>
      </Link>
    </div>
  );
};

Countries.propTypes = {
  countries: PropTypes.object,
};

export default Countries;
