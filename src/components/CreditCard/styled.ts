import styled from 'styled-components';

import { BoxCreditCardProps } from '.';

export const BoxCreditCard = styled.div<BoxCreditCardProps>`
  display: flex;
  width: 100%;
  height: 20rem;
  background: ${({ hasBrandLogo }) =>
    hasBrandLogo
      ? `linear-gradient(279deg, rgba(58,90,110,1) 0%, rgba(87,114,134,1) 50%, rgba(18,71,104,1) 100%)`
      : `linear-gradient(90deg, rgba(153, 153, 153, 1) 0%, rgba(185, 185, 185, 1) 43%, rgba(104, 104, 104, 1) 100%)`};

  -webkit-box-shadow: 1px 9px 15px -3px rgba(0, 0, 0, 0.37);
  box-shadow: 1px 9px 15px -3px rgba(0, 0, 0, 0.37);
  border-radius: 1rem;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${({ isBackOpen }) => (isBackOpen ? 'transform: rotateY(180deg);' : undefined)}
`;

export const BoxFront = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const BoxLogoImage = styled.div`
  height: 2.3rem;
  margin-bottom: 5.4rem;
`;

export const BoxNumber = styled.div`
  margin-bottom: 3.3rem;
`;

export const BoxNameAndExpired = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const BoxBackTarget = styled.div`
  width: 100%;
  background-color: ${({ theme: { pallete } }) => pallete.black};
  height: 4.5rem;
  margin-top: 4rem;
`;

export const BoxCVV = styled.div`
  width: 17rem;
  height: 2.8rem;
  margin-left: 4rem;
  margin-top: 2rem;
  background-color: ${({ theme: { pallete } }) => pallete.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxCVVTarget = styled.div`
  height: 100%;
  width: 75%;
  background-color: ${({ theme: { pallete } }) => pallete.gray};
`;

export const BoxCVVText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`;
