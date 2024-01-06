import { Link } from 'react-router-dom';
import {
  NeighboringCountriesCard,
  NeighboringCountriesTitle,
  NeighboringCountriesWrapper,
} from './styles';
import PropTypes from 'prop-types';
import { ROUTES } from '../../utils/routes';

const NeighboringCountries = ({
  neighboringCountries,
  isNeighboringCountriesLoading,
}) => {
  const hasNeighboringCountries = neighboringCountries?.length > 0;
  return (
    <>
      <NeighboringCountriesTitle>
        Neighboring Countries
      </NeighboringCountriesTitle>
      <NeighboringCountriesWrapper>
        {isNeighboringCountriesLoading ? (
          <NeighboringCountriesCard $loading>
            <img src="" />
            <p></p>
          </NeighboringCountriesCard>
        ) : (
          neighboringCountries?.map((country) => {
            const {
              flags: { png: flagPng },
              name: { common: commonName },
            } = country;
            return (
              <NeighboringCountriesCard key={commonName}>
                <Link to={ROUTES.COUNTRY.replace(':name', commonName)}>
                  <img src={flagPng} alt="Flag" />
                </Link>
                <p>{commonName}</p>
              </NeighboringCountriesCard>
            );
          })
        )}

        {!hasNeighboringCountries && <span>None</span>}
      </NeighboringCountriesWrapper>
    </>
  );
};

NeighboringCountries.propTypes = {
  neighboringCountries: PropTypes.array,
  isNeighboringCountriesLoading: PropTypes.bool,
};

export default NeighboringCountries;
