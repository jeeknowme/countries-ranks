import styled from 'styled-components';

export const MainContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  color: ${(props) => props.theme.color.secondary};
`;

MainContentHeader.displayName = 'MainContentHeader';

export const HeaderSearch = styled.div`
  border-radius: 15px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  width: 340px;
  background-color: ${(props) => props.theme.background.secondary};

  input {
    background-color: inherit;
    border: none;
    outline: none;
    padding: 10px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.color.primary};
  }
`;

HeaderSearch.displayName = 'HeaderSearch';
