import styled from 'styled-components';

import { BoxProps } from '.';

export const Box = styled.div<BoxProps>`
  display: flex;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`;
