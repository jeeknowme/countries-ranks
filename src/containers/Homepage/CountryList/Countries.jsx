import PropTypes from 'prop-types';

import { Country } from './styles';

const Countries = ({ country }) => {
  const {
    flags: { png: flagPng },
    name: { common: commonName },
    population,
    area,
    region,
  } = country;
  return (
    <>
      <Country>
        <img src={flagPng} alt="Flag" />
      </Country>
      <Country>{commonName}</Country>
      <Country>{population}</Country>
      <Country>{area}</Country>
      <Country hidden>{region}</Country>
    </>
  );
};

Countries.propTypes = {
  countries: PropTypes.object,
};

export default Countries;
