import { CountryLoading } from './styles';

const CountryLoader = () => {
  return (
    <>
      <CountryLoading $isImg></CountryLoading>
      <CountryLoading $isText />
      <CountryLoading $isText />
      <CountryLoading $isText />
      <CountryLoading $isText hidden />

      <CountryLoading $isImg></CountryLoading>
      <CountryLoading $isText />
      <CountryLoading $isText />
      <CountryLoading $isText />
      <CountryLoading $isText hidden />
    </>
  );
};

export default CountryLoader;
