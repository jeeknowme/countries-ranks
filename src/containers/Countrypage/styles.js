import styled, { css } from 'styled-components';
import { MainContent as HomePageMainContent } from '../Homepage/styles';
import { media } from '../../media';

export const MainContent = styled(HomePageMainContent)`
  display: block;
  padding: 20px 0;

  ${media.small`
    width:100%;
    max-width:720px;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -9%);
  `};
`;

MainContent.displayName = 'MainContent';
MainContent.defaultProps = {
  'data-id': 'MainContent',
};

export const FlagContainer = styled.div`
  max-width: 260px;
  position: relative;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;

  > img {
    border-radius: 10px;
    width: 100%;
    height: 190px;
  }
`;

FlagContainer.displayName = 'FlagContainer';
FlagContainer.defaultProps = {
  'data-id': 'FlagContainer',
};

export const CountryTitle = styled.h1`
  margin-top: -42px;
  font-size: ${(props) => props.theme.font.size.lg};
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  font-weight: 600;
`;

CountryTitle.displayName = 'CountryTitle';
CountryTitle.defaultProps = {
  'data-id': 'CountryTitle',
};

export const CountrySubTitle = styled.h2`
  font-size: ${(props) => props.theme.font.size.normal};
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  font-weight: 400;
`;

CountrySubTitle.displayName = 'CountrySubTitle';
CountrySubTitle.defaultProps = {
  'data-id': 'CountrySubTitle',
};

export const CountryDetails = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 45px;
  color: white;
  justify-content: center;
  flex-wrap: wrap;
`;

CountryDetails.displayName = 'CountryDetails';
CountryDetails.defaultProps = {
  'data-id': 'CountryDetails',
};

export const Population = styled.div`
  display: flex;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.background.secondary};
  border-radius: 10px;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  p:first-child {
    display: flex;
    gap: 20px;
    font-size: ${(props) => props.theme.font.size.sm};
    align-items: center;
  }

  p:first-child::after {
    content: '';
    display: inline-block;
    border-right: 1px solid ${(props) => props.theme.background.shark};
    width: 1px;
    height: 35px;
  }
`;

Population.displayName = 'Population';
Population.defaultProps = {
  'data-id': 'Population',
};

export const Area = styled(Population)``;

Area.displayName = 'Area';
Area.defaultProps = {
  'data-id': 'Area',
};

export const CountryAddInfo = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.font.size.sm};

  div {
    border-style: solid;
    border-width: 1px 0 0 0;
    border-color: ${(props) => props.theme.background.secondary};
    color: ${(props) => props.theme.color.secondary};
    display: flex;
    justify-content: space-between;
    padding: 22px 20px;

    &:last-child {
      border-bottom: 1px solid ${(props) => props.theme.background.secondary};
    }

    p:last-child {
      color: ${(props) => props.theme.color.primary};
    }
  }
`;

CountryAddInfo.displayName = 'CountryAddInfo';
CountryAddInfo.defaultProps = {
  'data-id': 'CountryAddInfo',
};

export const NeighboringCountriesWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding: 20px;
  gap: 16px;
  padding-bottom: 75px;
`;

NeighboringCountriesWrapper.displayName = 'NeighboringCountriesWrapper';
NeighboringCountriesWrapper.defaultProps = {
  'data-id': 'NeighboringCountriesWrapper',
};

export const NeighboringCountriesCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 80px;
    height: 60px;
    border-radius: 5px;

    ${(props) =>
      props.$loading &&
      css`
        background-color: ${(props) => props.theme.background.secondary};
        border: none;
        outline: none;
      `}
  }

  p {
    font-size: ${(props) => props.theme.font.size.xs};

    ${(props) =>
      props.$loading &&
      css`
        background-color: ${(props) => props.theme.background.secondary};
        border-radius: 10px;
        height: 15px;
      `}
  }
`;

export const NeighboringCountriesTitle = styled.h4`
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: 400;
  margin-top: 30px;
  margin-left: 20px;
`;
