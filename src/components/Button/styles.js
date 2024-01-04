import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.background.secondary};
  border: none;
  color: ${(props) => props.theme.color.primary};

  ${(props) =>
    props.disabled &&
    css`
      color: ${(props) => props.theme.color.secondary};
      background-color: ${(props) => props.theme.background.shark};
    `}
`;
