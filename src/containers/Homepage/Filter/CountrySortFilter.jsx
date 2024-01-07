import useFilter from '../../../store/filter';
import { FilterSortContainer } from './styles';
import { FilterTitle } from './styles';
import { SORT_BY } from '../../../utils/CONSTANTS';
import { shallow } from 'zustand/shallow';
import { useLocation, useNavigate } from 'react-router-dom';
import { setUrlSearchParams } from '../../../utils/helpers';

const CountrySortFilter = () => {
  const { sortFilter, setSortByFilter } = useFilter((state) => {
    return {
      sortFilter: state.sortFilter,
      setSortByFilter: state.setSortByFilter,
    };
  }, shallow);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSort = (event) => {
    const { value } = event.target;
    setSortByFilter(value);
    setUrlSearchParams('sort', value, navigate, location);
  };

  return (
    <FilterSortContainer>
      <FilterTitle>Sort by</FilterTitle>
      <select name="sort" id="sort" value={sortFilter} onChange={handleSort}>
        <option value={SORT_BY.POPULATION}>Population</option>
        <option value={SORT_BY.ALPHABETICAL}>Alphabetical Order</option>
        <option value={SORT_BY.AREA}>Area (Km2)</option>
      </select>
    </FilterSortContainer>
  );
};

export default CountrySortFilter;
