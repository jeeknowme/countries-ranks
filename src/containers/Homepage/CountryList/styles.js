import styled, { css } from 'styled-components';
import { media } from '../../../media';

export const CountryListWrapper = styled.div`
  ${media.small`
    grid-column: span 5;
  `}
`;

export const CountryTable = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-gap: 20px;

  ${media.medium`
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
  `}

  > .countryRow {
    grid-column: span 4;
    ${media.medium`
      grid-column: span 5;
    `}
    &:hover {
      padding-left: 10px;
      background-color: #ffffff1a;
      border-radius: 10px;
    }

    > a {
      display: grid;
      grid-template-columns: auto 1fr 1fr 1fr;
      grid-gap: 20px;

      ${media.medium`
        grid-template-columns: auto 1fr 1fr 1fr 1fr;
      `}
    }
  }
`;

CountryTable.displayName = 'CountryTable';

export const CountryHeader = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.background.secondary};
  font-size: ${(props) => props.theme.font.size.xs};
  padding: 22px 0px;

  ${(props) =>
    props.hidden &&
    css`
      display: none;

      ${media.medium`
          display: block;
        `}
    `}
`;
CountryHeader.displayName = 'CountryHeader';

export const CountryGrid = styled.div`
  color: ${(props) => props.theme.color.primary};
  padding-top: 15px;
  padding-bottom: 5px;

  ${(props) =>
    props.hidden &&
    css`
      display: none;

      ${media.medium`
          display: block;
        `}
    `}

  > img {
    width: 45px;
    height: 35px;
  }
`;

CountryGrid.displayName = 'CountryGrid';

export const CountryLoading = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;

  ${(props) =>
    props.$isImg &&
    css`
      width: 45px;
      height: 35px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.background.secondary};
    `};

  ${(props) =>
    props.$isText &&
    css`
      padding-right: 25px;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        display: inline-block;
        height: 10px;
        width: 100%;
        background-color: ${(props) => props.theme.background.secondary};
        border-radius: 25px;
      }
    `}

  ${(props) =>
    props.hidden &&
    css`
      display: none;

      ${media.medium`
          display: block;
        `}
    `}
`;
