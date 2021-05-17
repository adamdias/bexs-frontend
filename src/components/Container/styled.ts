import styled from 'styled-components';

import { ContainerProps } from '.';

export const Container = styled.div<ContainerProps>`
  max-width: 130rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 2.4rem;

  @media only screen and (max-width: 45em) {
    max-width: 100%;
    margin: 0;
  }
`;
