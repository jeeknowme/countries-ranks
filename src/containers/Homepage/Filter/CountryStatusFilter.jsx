import { FilterStatusContainer } from './styles';
import { FilterTitle } from './styles';
import { StatusList } from './styles';
import { StatusListItem } from './styles';
import { StatusCheckbox } from './styles';

const CountryStatusFilter = () => {
  return (
    <FilterStatusContainer>
      <FilterTitle>Status</FilterTitle>
      <StatusList>
        <StatusListItem>
          <StatusCheckbox type="checkbox" name="un" id="un" />
          <label htmlFor="un">Member of the United Nations</label>
        </StatusListItem>
        <StatusListItem>
          <StatusCheckbox type="checkbox" name="independent" id="independent" />
          <label htmlFor="independent">Independent</label>
        </StatusListItem>
      </StatusList>
    </FilterStatusContainer>
  );
};

export default CountryStatusFilter;
