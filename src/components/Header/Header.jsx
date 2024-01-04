import { HeaderWrapper, HeroContainer, HeroImage } from './styles';

function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeroContainer>
          <HeroImage src="/assets/images/Logo.svg" alt="Logo" />
        </HeroContainer>
      </HeaderWrapper>
    </>
  );
}

export default Header;
