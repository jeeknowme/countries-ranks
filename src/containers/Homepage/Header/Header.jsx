import { MainContentHeader } from './styles';
import { HeaderSearch } from './styles';
import PropTypes from 'prop-types';
import useFilter from '../../../store/filter';

const Header = ({ totalFilteredCountries }) => {
  const { searchFilter, setSearchFilter } = useFilter((state) => ({
    searchFilter: state.searchFilter,
    setSearchFilter: state.setSearchFilter,
  }));

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchFilter(value);
  };

  return (
    <MainContentHeader>
      <p>Found {totalFilteredCountries} countries</p>
      <HeaderSearch>
        <i className="fa-solid fa-lg fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search by Name, Region, Subregion"
          value={searchFilter}
          onChange={handleSearch}
        />
      </HeaderSearch>
    </MainContentHeader>
  );
};

Header.propTypes = {
  totalFilteredCountries: PropTypes.number,
};

export default Header;
