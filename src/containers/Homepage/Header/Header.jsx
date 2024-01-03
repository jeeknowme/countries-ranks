import { MainContentHeader } from './styles';
import { HeaderSearch } from './styles';

const Header = () => {
  return (
    <MainContentHeader>
      <p>Found 234 countries</p>
      <HeaderSearch>
        <i className="fa-solid fa-lg fa-magnifying-glass"></i>
        <input type="text" placeholder="Search by Name, Region, Subregion" />
      </HeaderSearch>
    </MainContentHeader>
  );
};

export default Header;
