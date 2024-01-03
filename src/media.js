import { css } from 'styled-components';

export const media = {
  small: (...args) => css`
    @media (min-width: 641px) {
      ${css(...args)};
    }
  `,

  medium: (...args) => css`
    @media (min-width: 1025px) {
      ${css(...args)};
    }
  `,

  large: (...args) => css`
    @media (min-width: 1281px) {
      ${css(...args)};
    }
  `,
};
