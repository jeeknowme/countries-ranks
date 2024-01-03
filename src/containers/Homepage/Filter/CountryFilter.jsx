import CountryRegionFilter from './CountryRegionFilter';
import CountrySortFilter from './CountrySortFilter';
import CountryStatusFilter from './CountryStatusFilter';

const CountryFilter = () => {
  return (
    <>
      <CountrySortFilter />
      <CountryRegionFilter />
      <CountryStatusFilter />
    </>
  );
};

export default CountryFilter;
