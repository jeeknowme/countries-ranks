import { FilterRegionContainer } from './styles';
import { FilterTitle } from './styles';
import { RegionList } from './styles';
import { RegionCheckbox } from './styles';
import { Region } from './styles';
import { REGION } from '../../../utils/CONSTANTS';
import useFilter from '../../../store/filter';

import { useState } from 'react';

const CountryRegionFilter = () => {
  const { regionFilter, setRegionFilter } = useFilter((state) => ({
    regionFilter: state.regionFilter,
    setRegionFilter: state.setRegionFilter,
  }));

  const handleRegionFilter = (event) => {
    const { value } = event.target;
    setRegionFilter(value);
  };

  return (
    <FilterRegionContainer>
      <FilterTitle>Region</FilterTitle>
      <RegionList>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="americas"
          checked={regionFilter.Americas}
          value={REGION.AMERICAS}
          onChange={handleRegionFilter}
        />
        <Region htmlFor="americas">Americas</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="antartic"
          checked={regionFilter.Antarctic}
          value={REGION.ANTARCTIC}
          onChange={handleRegionFilter}
        />
        <Region htmlFor="antartic">antartic</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="africa"
          checked={regionFilter.Africa}
          value={REGION.AFRICA}
          onChange={handleRegionFilter}
        />
        <Region htmlFor="africa">africa</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="asia"
          checked={regionFilter.Asia}
          value={REGION.ASIA}
          onChange={handleRegionFilter}
        />
        <Region htmlFor="asia">asia</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="europe"
          checked={regionFilter.Europe}
          value={REGION.EUROPE}
          onChange={handleRegionFilter}
        />
        <Region htmlFor="europe">europe</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="oceania"
          checked={regionFilter.Oceania}
          value={REGION.OCEANIA}
          onChange={handleRegionFilter}
        />
        <Region htmlFor="oceania">oceania</Region>
      </RegionList>
    </FilterRegionContainer>
  );
};
export default CountryRegionFilter;
