import CountryFilter from './Filter/CountryFilter';
import Header from './Header/Header';
import {
  MainContent,
  MainContentBody,
  MainContentWrapper,
  MainContentFilter,
} from './styles';

import { useQuery } from 'react-query';
import { all as getAllCountries } from '../../services/countries';
import { useCallback, useMemo, useState } from 'react';
import useFilter from '../../store/filter';
import { SORT_BY, STATUS } from '../../utils/CONSTANTS';
import { shallow } from 'zustand/shallow';

import CountryList from './CountryList/CountryList';

function Homepage() {
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery('countries', getAllCountries, {
    refetchOnWindowFocus: false,
  });

  const { statusFilter, regionFilter, sortFilter, searchFilter } = useFilter(
    (state) => ({
      statusFilter: state.statusFilter,
      regionFilter: state.regionFilter,
      sortFilter: state.sortFilter,
      searchFilter: state.searchFilter,
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
      hasRegionFilter
        ? countries?.filter((country) =>
            selectedRegionFilter.includes(country.region)
          )
        : countries,

    [hasRegionFilter, selectedRegionFilter]
  );

  const filterCountriesByStatus = useCallback(
    (countries) => {
      return hasStatusFilter
        ? countries?.filter((country) => {
            return (
              (selectedStatusFilter.includes(STATUS.INDEPENDENT) &&
                country.independent) ||
              (selectedStatusFilter.includes(STATUS.UN) && country.unMember)
            );
          })
        : countries;
    },
    [hasStatusFilter, selectedStatusFilter]
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
    [sortFilter]
  );

  const searchKeys = ['region', 'subregion'];

  const searchCountries = useCallback(
    (countries) => {
      if (searchFilter === '') return countries;

      const lowercasedFilter = searchFilter.toLowerCase();

      return countries?.filter((country) => {
        const searchInKeys = searchKeys.some((key) =>
          country[key].toLowerCase().includes(lowercasedFilter)
        );

        const searchInName = country.name.common
          .toLowerCase()
          .includes(lowercasedFilter);

        return searchInKeys || searchInName;
      });
    },
    [searchFilter, countries]
  );

  const filterCountries = () => {
    const regionFiltered = filterCountriesByRegion(countries);
    const statusFiltered = filterCountriesByStatus(regionFiltered);
    const searchFiltered = searchCountries(statusFiltered);

    return sortCountries(searchFiltered);
  };

  const filteredCountries = filterCountries();

  const totalFilteredCountries = filteredCountries?.length;

  const paginatedCountries = useMemo(
    () => filteredCountries?.slice(startIndex, endIndex) || [],
    [currentPage, filteredCountries, regionFilter]
  );

  const totalPage = useMemo(
    () => Math.ceil(filteredCountries?.length / 10) || 1,
    [paginatedCountries]
  );

  return (
    <>
      <MainContentWrapper>
        <MainContent>
          <Header totalFilteredCountries={totalFilteredCountries} />
          <MainContentBody>
            <MainContentFilter>
              <CountryFilter />
            </MainContentFilter>
            <CountryList
              totalPage={totalPage}
              paginatedCountries={paginatedCountries}
              error={error}
              isLoading={isLoading}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </MainContentBody>
        </MainContent>
      </MainContentWrapper>
    </>
  );
}

export default Homepage;
