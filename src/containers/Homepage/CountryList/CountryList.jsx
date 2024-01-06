import Countries from './Countries';
import CountryListTableHeader from './CountryListHeader';
import { CountryListWrapper, CountryTable } from './styles';
import CountryLoader from './CountryLoader';

import { useEffect, useMemo } from 'react';
import Pagination from '../../../components/Pagination/Pagination';

const CountryList = ({
  totalPage,
  paginatedCountries,
  isLoading,
  error,
  currentPage,
  setCurrentPage,
}) => {
  const isLastPage = useMemo(
    () => currentPage == totalPage,
    [currentPage, totalPage]
  );

  const isFirstPage = useMemo(() => currentPage == 1, [currentPage]);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage > totalPage ? totalPage : nextPage);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1 || 1);
  };

  const noCountriesFound = paginatedCountries.length < 1;

  useEffect(() => {
    if (currentPage > totalPage) setCurrentPage(totalPage);
  }, [totalPage]);

  return (
    <>
      <CountryListWrapper>
        <CountryTable>
          <CountryListTableHeader />
          {isLoading ? (
            <CountryLoader />
          ) : (
            paginatedCountries.map((country) => {
              return <Countries country={country} key={country.name.common} />;
            })
          )}

          {noCountriesFound && <h4>No Countries found</h4>}

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
