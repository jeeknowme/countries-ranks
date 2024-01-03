import { FilterRegionContainer } from './styles';
import { FilterTitle } from './styles';
import { RegionList } from './styles';
import { RegionCheckbox } from './styles';
import { Region } from './styles';

const CountryRegionFilter = () => {
  return (
    <FilterRegionContainer>
      <FilterTitle>Region</FilterTitle>
      <RegionList>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="americas"
          value="americas"
        />
        <Region htmlFor="americas">Americas</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="antartic"
          value="antartic"
        />
        <Region htmlFor="antartic">antartic</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="africa"
          value="africa"
        />
        <Region htmlFor="africa">africa</Region>
        <RegionCheckbox type="checkbox" name="regions" id="asia" value="asia" />
        <Region htmlFor="asia">asia</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="europe"
          value="europe"
        />
        <Region htmlFor="europe">europe</Region>
        <RegionCheckbox
          type="checkbox"
          name="regions"
          id="oceania"
          value="oceania"
        />
        <Region htmlFor="oceania">oceania</Region>
      </RegionList>
    </FilterRegionContainer>
  );
};
export default CountryRegionFilter;
