import Button from '../Button/Button';
import { StyledPagination } from './styles';

const Pagination = ({ next, prev }) => {
  const { text: prevText, onClick: prevOnClick, disabled: prevDisabled } = prev;
  const { text: nextText, onClick: nextOnClick, disabled: nextDisabled } = next;
  return (
    <StyledPagination>
      <Button text={prevText} onClick={prevOnClick} disabled={prevDisabled} />
      <Button text={nextText} onClick={nextOnClick} disabled={nextDisabled} />
    </StyledPagination>
  );
};

export default Pagination;
