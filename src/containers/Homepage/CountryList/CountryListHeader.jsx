import { CountryHeader } from './styles';

const CountryListTableHeader = () => {
  return (
    <>
      <CountryHeader>Flag</CountryHeader>
      <CountryHeader>Name</CountryHeader>
      <CountryHeader>Population</CountryHeader>
      <CountryHeader>Area (km2)</CountryHeader>
      <CountryHeader hidden>Region</CountryHeader>
    </>
  );
};
export default CountryListTableHeader;
