import Countries from './Countries';
import CountryListTableHeader from './CountryListHeader';
import { CountryListWrapper, CountryTable } from './styles';
import CountryLoader from './CountryLoader';

import { useQuery } from 'react-query';
import { all as getAllCountries } from '../../../services/countries';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Pagination from '../../../components/Pagination/Pagination';
import useFilter from '../../../store/filter';
import { SORT_BY, STATUS } from '../../../utils/CONSTANTS';
import { shallow } from 'zustand/shallow';

const CountryList = () => {
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery('countries', getAllCountries, {
    refetchOnWindowFocus: false,
  });

  const { statusFilter, regionFilter, sortFilter } = useFilter(
    (state) => ({
      statusFilter: state.statusFilter,
      regionFilter: state.regionFilter,
      sortFilter: state.sortFilter,
    }),
    shallow
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const hasRegionFilter = Object.values(regionFilter).some((v) => v);
  const hasStatusFilter = Object.values(statusFilter).some((v) => v);

  const selectedRegionFilter = Object.keys(regionFilter).filter(
    (region) => regionFilter[region]
  );

  const selectedStatusFilter = Object.keys(statusFilter).filter(
    (status) => statusFilter[status]
  );

  const filterCountriesByRegion = useCallback(
    (countries) =>
      countries?.filter((country) => {
        return (
          !hasRegionFilter || selectedRegionFilter.includes(country.region)
        );
      }),
    [countries, selectedRegionFilter]
  );

  const filterCountriesByStatus = useCallback(
    (countries) => {
      if (!hasStatusFilter) return countries;

      return countries?.filter((country) => {
        const isIndependent =
          selectedStatusFilter.includes(STATUS.INDEPENDENT) &&
          country.independent;
        const isUnMember =
          selectedStatusFilter.includes(STATUS.UN) && country.unMember;

        return isIndependent || isUnMember;
      });
    },
    [countries, selectedStatusFilter]
  );

  const sortCountries = useCallback(
    (countries) => {
      return countries?.slice().sort((a, b) => {
        const compareName = (c, d) => c.localeCompare(d);

        switch (sortFilter) {
          case SORT_BY.ALPHABETICAL:
            return compareName(a.name.common, b.name.common);
          case SORT_BY.POPULATION:
            return a.population - b.population;
          case SORT_BY.AREA:
            return a.area - b.area;
          default:
            return 0;
        }
      });
    },
    [countries, sortFilter]
  );

  const filteredCountries = sortCountries(
    filterCountriesByStatus(filterCountriesByRegion(countries))
  );

  const paginatedCountries = useMemo(
    () => filteredCountries?.slice(startIndex, endIndex) || [],
    [currentPage, filteredCountries, regionFilter]
  );

  const totalPage = useMemo(
    () => Math.ceil(filteredCountries?.length / 10) || 1,
    [paginatedCountries]
  );

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

  const noCountriesFound = paginatedCountries.length < 1;

  console.log(filteredCountries?.length);
  console.log('Current page ', currentPage, 'Total Page ', totalPage);
  console.log(selectedStatusFilter);
  console.log(filteredCountries);

  const isFirstPage = useMemo(() => currentPage == 1, [currentPage]);

  useEffect(() => {
    if (currentPage > totalPage) setCurrentPage(totalPage);
  }, [filteredCountries]);

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
