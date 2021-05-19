import styled from 'styled-components';

export const BoxPage = styled.div`
  display: flex;
  width: 80%;

  @media only screen and (max-width: 76.875em) {
    width: 100%;
  }

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`;

export const BoxSidebar = styled.div`
  width: 20%;
  background-color: blue;
  margin-left: 1.5rem;
  background-color: ${({ theme: { pallete } }) => pallete.white};
  padding: 5.2rem 2rem;
  align-self: flex-start;

  @media only screen and (max-width: 76.875em) {
    display: none;
  }
`;

export const BoxSidebarDivider = styled.div`
  border-top: 1px solid ${({ theme: { pallete } }) => pallete.grayDark};
  border-bottom: 1px solid ${({ theme: { pallete } }) => pallete.grayDark};
  padding: 2.5rem 0;
  margin: 2.5rem 0;
`;

export const DividerCard = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const BoxSidebarCardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxPageInfo = styled.div`
  width: 33%;
  background-color: ${({ theme: { pallete } }) => pallete.primary};
  padding: 5rem 1.6rem 5rem 6.4rem;
  position: relative;

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    padding: 4rem;
  }
`;

export const BoxPageInfoLink = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5.4rem;

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

export const BoxPageInfoLinkMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;

  @media only screen and (min-width: 56.25em) {
    display: none;
  }
`;

export const BoxPageInfoLinkIconMobile = styled.div`
  position: absolute;
  left: -3rem;
`;

export const BoxPageInfoLinkIcon = styled.div`
  margin-right: 1.4rem;
`;

export const BoxPageInfoTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 3.2rem;

  @media only screen and (max-width: 56.25em) {
    justify-content: center;
  }
`;

export const BoxPageInfoImage = styled.div`
  margin-right: 1.5rem;
`;

export const BoxCreditCard = styled.div`
  width: 36rem;

  @media only screen and (max-width: 56.25em) {
    max-width: 36rem;
    width: 100%;
    margin: 0 auto -9rem auto;
  }
`;

export const BoxPageForm = styled.div`
  flex-grow: 1;
  background-color: ${({ theme: { pallete } }) => pallete.white};
  padding: 5rem 6.4rem 5rem 16rem;

  @media only screen and (max-width: 56.25em) {
    padding: 4rem;
  }
`;

export const BoxFormStep = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

export const BoxFormStepItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxFormStepNumber = styled.div`
  margin-right: 1.24rem;
`;

export const BoxFormStepIcon = styled.div`
  margin: 0 2.4rem;
`;

export const BoxForm = styled.form`
  background-color: ${({ theme: { pallete } }) => pallete.white};
`;

export const BoxFormFields = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BoxFormFieldItem = styled.div`
  width: 48%;
`;

export const BoxFormButtonAlignRight = styled.div`
  margin-top: 6.2rem;
  justify-content: flex-end;
  display: flex;
  width: 100%;
`;

export const BoxFormButtonSize = styled.div`
  width: 100%;
  display: flex;
  max-width: 24.6rem;

  @media only screen and (max-width: 56.25em) {
    max-width: 100%;
  }
`;
