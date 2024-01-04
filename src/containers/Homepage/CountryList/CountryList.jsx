import Countries from './Countries';
import CountryListTableHeader from './CountryListHeader';
import { CountryListWrapper, CountryTable } from './styles';
import CountryLoader from './CountryLoader';

import { useQuery } from 'react-query';
import { all as getAllCountries } from '../../../services/countries';
import { useMemo, useState } from 'react';
import Pagination from '../../../components/Pagination/Pagination';

const CountryList = () => {
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery('countries', getAllCountries);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentCountries = countries?.slice(startIndex, endIndex) || [];

  const totalPage = useMemo(() => Math.round(countries?.length / 10));

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage > totalPage ? totalPage : nextPage);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1 || 1);
  };

  const isLastPage = useMemo(
    () => currentPage == totalPage,
    [currentPage, totalPage]
  );

  const isFirstPage = useMemo(() => currentPage == 1, [currentPage]);

  return (
    <>
      <CountryListWrapper>
        <CountryTable>
          <CountryListTableHeader />
          {isLoading ? (
            <CountryLoader />
          ) : (
            currentCountries.map((country) => {
              return <Countries country={country} key={country.name.common} />;
            })
          )}

          {error && <h4>Error fetching Countries</h4>}
        </CountryTable>

        <Pagination
          next={{
            text: 'Next',
            onClick: handleNextPage,
            disabled: isLastPage,
          }}
          prev={{
            text: 'Prev',
            onClick: handlePrevPage,
            disabled: isFirstPage,
          }}
        />
      </CountryListWrapper>
    </>
  );
};

export default CountryList;
