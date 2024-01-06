import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MainContentWrapper } from '../Homepage/styles';
import NeighboringCountries from './NeighboringCountries';
import {
  Area,
  CountryAddInfo,
  CountryDetails,
  CountrySubTitle,
  CountryTitle,
  FlagContainer,
  MainContent,
  Population,
} from './styles';

import { findByName, getNeighboringCountries } from '../../services/countries';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner';

const CountryPageContainer = () => {
  const { name } = useParams();

  const {
    data: country,
    isLoading,
    error,
  } = useQuery(['countries', name], () => findByName(name), {
    refetchOnWindowFocus: false,
  });

  const {
    data: neighboringCountries,
    isNeighboringCountriesLoading,
    neighboringCountriesError,
  } = useQuery(
    ['neighboringCountries', country],
    () => {
      return getNeighboringCountries(country?.[0]?.borders);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const fetchedCountry = country?.[0] || [];
  const {
    name: { common: commonName = '', official: officialName = '' } = {},
    capital: capitals = [],
    population = '',
    subregion = '',
    languages = {},
    currencies = {},
    continents = [],
    area = '',
    flags: { png: flagPng } = {},
  } = fetchedCountry;

  const formatValues = (values) => values.map((value) => `${value}`).join(', ');

  if (isLoading) return <LoadingSpinner />;

  return (
    <MainContentWrapper>
      <MainContent>
        <FlagContainer>
          <img src={flagPng} alt="Flag" />
        </FlagContainer>
        <CountryTitle>{commonName}</CountryTitle>
        <CountrySubTitle>{officialName}</CountrySubTitle>
        <CountryDetails>
          <Population>
            <p>Population</p>
            <p>{population}</p>
          </Population>
          <Area>
            <p>Area (km2)</p>
            <p>{area}</p>
          </Area>
        </CountryDetails>
        <CountryAddInfo>
          <div>
            <p>Capital</p>
            <p>{formatValues(capitals)}</p>
          </div>
          <div>
            <p>Subregion</p>
            <p>{subregion}</p>
          </div>
          <div>
            <p>Language</p>
            <p>{formatValues(Object.values(languages))}</p>
          </div>
          <div>
            <p>Currencies</p>
            <p>
              {formatValues(
                Object.values(currencies).map((currency) => currency.name)
              )}
            </p>
          </div>
          <div>
            <p>Continents</p>
            <p>{formatValues(continents)}</p>
          </div>
        </CountryAddInfo>
        <NeighboringCountries
          neighboringCountries={neighboringCountries}
          isNeighboringCountriesLoading={isNeighboringCountriesLoading}
        />
      </MainContent>
    </MainContentWrapper>
  );
};

export default CountryPageContainer;
