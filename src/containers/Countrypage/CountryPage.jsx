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

const CountryPage = () => {
  return (
    <MainContentWrapper>
      <MainContent>
        <FlagContainer>
          <img src="assets/images/hero-image-wr.jpg" alt="Flag" />
        </FlagContainer>
        <CountryTitle>India</CountryTitle>
        <CountrySubTitle>Republic of India</CountrySubTitle>
        <CountryDetails>
          <Population>
            <p>Population</p>
            <p>1,380,004,385</p>
          </Population>
          <Area>
            <p>Area (km2)</p>
            <p>2,973,190</p>
          </Area>
        </CountryDetails>
        <CountryAddInfo>
          <div>
            <p>Capital</p>
            <p>New Delhi</p>
          </div>
          <div>
            <p>Subregion</p>
            <p>Southern Asia</p>
          </div>
          <div>
            <p>Language</p>
            <p>English, Hindi, Tamil</p>
          </div>
          <div>
            <p>Currencies</p>
            <p>Indian rupee</p>
          </div>
          <div>
            <p>Continents</p>
            <p>Asia</p>
          </div>
        </CountryAddInfo>
        <NeighboringCountries />
      </MainContent>
    </MainContentWrapper>
  );
};

export default CountryPage;
