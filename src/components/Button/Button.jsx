import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ text, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
