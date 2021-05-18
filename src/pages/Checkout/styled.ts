import styled from 'styled-components';

export const BoxPage = styled.div`
  display: flex;
  width: 100%;
`;

export const BoxPageInfo = styled.div`
  width: 100%;
  max-width: 35.2rem;
  background-color: ${({ theme: { pallete } }) => pallete.primary};
  padding: 5rem 1.6rem 5rem 6.4rem;
`;

export const BoxPageInfoLink = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxPageInfoLinkIcon = styled.div`
  margin-right: 1.4rem;
`;

export const BoxPageInfoTitle = styled.div`
  margin-top: 5.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxPageInfoImage = styled.div`
  width: 7rem;
  height: 7rem;
  margin-right: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BoxPageForm = styled.div`
  width: 100%;
  background-color: ${({ theme: { pallete } }) => pallete.white};
  padding: 5rem 6.4rem 5rem 16.8rem;
`;

export const BoxFormStep = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxForm = styled.form`
  width: 100%;
  background-color: ${({ theme: { pallete } }) => pallete.white};
`;

export const BoxFormFields = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxFormFieldItem = styled.div`
  width: 48%;
`;
