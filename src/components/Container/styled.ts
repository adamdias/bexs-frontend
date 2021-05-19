import styled from 'styled-components';

import { ContainerProps } from '.';

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  @media only screen and (max-width: 56.25em) {
    padding: 0;
    height: 100vh;
  }

  @media only screen and (max-width: 45em) {
    max-width: 100%;
    margin: 0;
  }
`;
