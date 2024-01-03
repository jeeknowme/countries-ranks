import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: black;
  padding-top: 3rem;
`;

HeaderWrapper.displayName = 'HeaderWrapper';

const HeroContainer = styled.div`
  background: black url('/assets/images/hero-image-wr.jpg') no-repeat center;
  height: 275px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
HeroContainer.displayName = 'HeroContainer';

const HeroImage = styled.img`
  width: 174px;
  height: 24px;
  transform: translateY(-56px);
`;

HeroImage.displayName = 'HeroImage';

export { HeroContainer, HeaderWrapper, HeroImage };
