import styled from 'styled-components';

import { ContainerProps } from '.';

export const Container = styled.div<ContainerProps>`
  max-width: 137rem;
  margin: 8rem auto;
  min-height: 50rem;

  @media only screen and (max-width: 37.5em) {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
`;
