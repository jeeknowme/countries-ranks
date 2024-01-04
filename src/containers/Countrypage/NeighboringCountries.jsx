import {
  NeighboringCountriesCard,
  NeighboringCountriesTitle,
  NeighboringCountriesWrapper,
} from './styles';

const NeighboringCountries = () => {
  return (
    <>
      <NeighboringCountriesTitle>
        Neighboring Countries
      </NeighboringCountriesTitle>
      <NeighboringCountriesWrapper>
        <NeighboringCountriesCard>
          <img src="" alt="Flag" />
          <p>Afghanistan</p>
        </NeighboringCountriesCard>
        <NeighboringCountriesCard>
          <img src="" alt="Flag" />
          <p>Bangladesh</p>
        </NeighboringCountriesCard>
        <NeighboringCountriesCard $loading>
          <img src="" />
          <p></p>
        </NeighboringCountriesCard>
        <NeighboringCountriesCard $loading>
          <img src="" />
          <p></p>
        </NeighboringCountriesCard>
        <NeighboringCountriesCard $loading>
          <img src="" />
          <p></p>
        </NeighboringCountriesCard>
      </NeighboringCountriesWrapper>
    </>
  );
};

export default NeighboringCountries;
