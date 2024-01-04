import styled from 'styled-components';
import { media } from '../../media';
import { HiddenInput } from '../../components/Input/styles';

export const MainContentWrapper = styled.div`
  position: relative;
`;

MainContentWrapper.displayName = 'MainContentWrapper';

export const MainContent = styled.div`
  padding: 20px 30px;
  background: #1b1d1f;
  border: solid 1px ${(props) => props.theme.background.secondary};
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
  gap: 35px;
  position: relative;
  width: 100%;
  top: -95px;
  left: 0;

  ${media.small`
    width: 95%;
    max-width: 1215px;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -10%);
  `};
`;

MainContent.displayName = 'MainContent';

export const MainContentBody = styled.div`
  display: grid;
  gap: 12px;

  ${media.small`
    grid-template-columns: repeat(7, 1fr);
  `}
`;

MainContentBody.displayName = 'MainContentBody';

export const MainContentFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${media.small`
    grid-column: span 2;
    padding-right: 30px;
  `}
`;

MainContentFilter.displayName = 'MainContentFilter';
