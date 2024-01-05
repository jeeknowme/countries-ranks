import useFilter from '../../../store/filter';
import { FilterStatusContainer } from './styles';
import { FilterTitle } from './styles';
import { StatusList } from './styles';
import { StatusListItem } from './styles';
import { StatusCheckbox } from './styles';
import { STATUS } from '../../../utils/CONSTANTS';

const CountryStatusFilter = () => {
  const { statusFilter, setStatusFilter } = useFilter((state) => ({
    statusFilter: state.statusFilter,
    setStatusFilter: state.setStatusFilter,
  }));

  const handleStatusSelection = (event) => {
    const { value } = event.target;
    setStatusFilter(value);
  };

  return (
    <FilterStatusContainer>
      <FilterTitle>Status</FilterTitle>
      <StatusList>
        <StatusListItem>
          <StatusCheckbox
            type="checkbox"
            name="un"
            id="un"
            value={STATUS.UN}
            checked={statusFilter.UN}
            onChange={handleStatusSelection}
          />
          <label htmlFor="un">Member of the United Nations</label>
        </StatusListItem>
        <StatusListItem>
          <StatusCheckbox
            type="checkbox"
            name="independent"
            id="independent"
            value={STATUS.INDEPENDENT}
            checked={statusFilter.Independent}
            onChange={handleStatusSelection}
          />
          <label htmlFor="independent">Independent</label>
        </StatusListItem>
      </StatusList>
    </FilterStatusContainer>
  );
};

export default CountryStatusFilter;
