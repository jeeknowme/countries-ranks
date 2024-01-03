import Countries from './Countries';
import CountryListTableHeader from './CountryListHeader';
import { CountryListWrapper, CountryTable } from './styles';
import CountryLoader from './CountryLoader';

const CountryList = () => {
  return (
    <>
      <CountryListWrapper>
        <CountryTable>
          <CountryListTableHeader />

          <Countries />

          <CountryLoader />
        </CountryTable>
      </CountryListWrapper>
    </>
  );
};

export default CountryList;
