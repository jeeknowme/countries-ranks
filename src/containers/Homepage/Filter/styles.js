import styled from 'styled-components';
import { HiddenInput } from '../../../components/Input/styles';

// SORT

export const FilterSortContainer = styled.div`
  select {
    padding: 10px;
    background-color: inherit;
    border: solid 1px ${(props) => props.theme.background.tertiary};
    border-color: ${(props) => props.theme.background.tertiary};
    border-radius: 15px;
    color: white;
    margin-top: 10px;
  }

  option {
    background-color: #1b1d1f;
    color: inherit;
    width: 100%;
  }
`;

FilterSortContainer.displayName = 'FilterSortContainer';

export const FilterTitle = styled.h4`
  font-size: ${(props) => props.theme.font.size.xs};
`;

FilterTitle.displayName = 'FilterTitle';

// REGION //

export const FilterRegionContainer = styled.div``;

FilterRegionContainer.displayName = 'FilterRegionContainer';

export const RegionList = styled.div`
  margin-top: 10px;
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
`;

RegionList.displayName = 'RegionList';

export const RegionCheckbox = styled(HiddenInput)`
  &:checked + label {
    background-color: #282b30;
    color: white;
  }
`;

RegionCheckbox.displayName = 'HiddenCheckbox';

export const Region = styled.label`
  text-transform: capitalize;
  font-size: ${(props) => props.theme.font.size.sm};
  padding: 7px 11px;
  border-radius: 10px;
`;

Region.displayName = 'Region';

// STATUS //

export const FilterStatusContainer = styled.div``;
FilterStatusContainer.displayName = 'FilterStatusContainer';

export const StatusList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 7px;
  color: white;
`;
StatusList.displayName = 'StatusList';

export const StatusCheckbox = styled(HiddenInput)`
  &:checked + label::before {
    border: none;
    background: ${(props) => props.theme.background.primary}
      url('/assets/images/Done_round.svg') no-repeat center;
    background-size: cover;
  }
`;

StatusCheckbox.displayName = 'StatusCheckbox';

export const StatusListItem = styled.div`
  label {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 15px;
    font-size: ${(props) => props.theme.font.size.sm};

    &::before {
      content: '';
      height: 25px;
      width: 25px;
      border: var(--primary-border);
      border-width: 2px;
      display: inline-block;
      border-radius: 5px;
    }
  }
`;
StatusListItem.displayName = 'StatusListItem';
