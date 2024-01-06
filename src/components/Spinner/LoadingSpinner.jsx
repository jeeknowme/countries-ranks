import { css } from 'styled-components';
import { BarLoader } from 'react-spinners';

const LoadingSpinner = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div>
      <BarLoader color="#36D7B7" loading={true} css={override} size={150} />
    </div>
  );
};

export default LoadingSpinner;
