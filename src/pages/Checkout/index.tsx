import React from 'react';

import { Container, Header, Text } from 'components';
import { ArrowIcon } from 'components/Icons';
import iconCard from 'global/assets/images/icon-card.svg';
import { useTheme } from 'styled-components';

import CheckoutForm from './form';
import * as S from './styled';

const CheckoutPage = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Container>
        <S.BoxPage>
          <S.BoxPageInfo>
            <S.BoxPageInfoLink>
              <S.BoxPageInfoLinkIcon>
                <ArrowIcon width={15} height={15} direction="left" color={theme.pallete.white} />
              </S.BoxPageInfoLinkIcon>
              <Text modifiers={['white', 'tag']}>Alterar forma de pagamento</Text>
            </S.BoxPageInfoLink>

            <S.BoxPageInfoTitle>
              <S.BoxPageInfoImage>
                <img src={iconCard} alt="Ícone do Cartão" />
              </S.BoxPageInfoImage>

              <Text htmlTagName="h1" modifiers={['white', 'title', 'bold']}>
                Adicione um novo cartão de crédito
              </Text>
            </S.BoxPageInfoTitle>
          </S.BoxPageInfo>

          <S.BoxPageForm>
            <S.BoxFormStep>
              <Text modifiers={['primary', 'tag']}>Carrinho</Text>
              <Text modifiers={['primary', 'tag']}>Pagamento</Text>
              <Text modifiers={['primary', 'tag']}>Confirmação</Text>
            </S.BoxFormStep>

            <CheckoutForm />
          </S.BoxPageForm>
        </S.BoxPage>
      </Container>
    </>
  );
};

export default CheckoutPage;
