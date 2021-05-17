import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme: { pallete } }) => pallete.white};
  border: 0;
  border-bottom-width: 0.5px;
  border-color: ${({ theme: { pallete } }) => pallete.grayDark};
  border-style: solid;
  margin-bottom: 6.5rem;

  @media only screen and (max-width: 45em) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 0;
  align-items: center;
`;

export const BoxImg = styled.div`
  max-width: 26rem;
  width: 26rem;
  margin-right: 2rem;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BoxMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60rem;
`;

export const MenuItem = styled.div`
  width: 10rem;
  height: 1.8rem;
  background-color: ${({ theme: { pallete } }) => pallete.black};
  border-radius: 5px;
`;
