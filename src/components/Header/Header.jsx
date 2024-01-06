import { ROUTES } from '../../utils/routes';
import { HeaderWrapper, HeroContainer, HeroImage } from './styles';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeroContainer>
          <Link to={ROUTES.HOME}>
            <HeroImage src="/assets/images/Logo.svg" alt="Logo" />
          </Link>
        </HeroContainer>
      </HeaderWrapper>
    </>
  );
}

export default Header;
