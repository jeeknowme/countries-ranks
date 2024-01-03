import { FilterSortContainer } from './styles';
import { FilterTitle } from './styles';

const CountrySortFilter = () => {
  return (
    <FilterSortContainer>
      <FilterTitle>Sort by</FilterTitle>
      <select name="sort" id="sort">
        <option value="Population">Population</option>
        <option value="Alphabetical Order">Alphabetical Order</option>
        <option value="Area">Area (Km2)</option>
      </select>
    </FilterSortContainer>
  );
};

export default CountrySortFilter;
