import styled from 'styled-components';

export const StyledPagination = styled.div`
  border-top: 1px solid ${(props) => props.theme.background.secondary};
  padding-top: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
