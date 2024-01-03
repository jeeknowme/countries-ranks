import CountryFilter from './Filter/CountryFilter';
import Header from './Header/Header';
import {
  MainContent,
  MainContentBody,
  MainContentWrapper,
  MainContentFilter,
} from './styles';

import { Country } from './CountryList/styles';
import CountryList from './CountryList/CountryList';

function Homepage() {
  return (
    <>
      <MainContentWrapper>
        <MainContent>
          <Header />
          <MainContentBody>
            <MainContentFilter>
              <CountryFilter />
            </MainContentFilter>
            <CountryList />
          </MainContentBody>
        </MainContent>
      </MainContentWrapper>
    </>
  );
}

export default Homepage;
