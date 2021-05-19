import React, { useState, useCallback } from 'react';

import { Container, Header, Card, Text, StepNumber, CreditCard } from 'components';
import { ArrowIcon, CardRoundedIcon } from 'components/Icons';
import { useTheme } from 'styled-components';

import CheckoutForm from './form';
import * as S from './styled';

const CheckoutPage = () => {
  const theme = useTheme();

  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [cardExpired, setCardExpired] = useState<string>('');
  const [cardCVV, setCardCVV] = useState<string>('');
  const [cardCVVFocused, setCardCVVFocused] = useState<boolean>(false);

  const handleOnChangeCardNumber = useCallback(
    (value: string) => {
      setCardNumber(value);
    },
    [cardNumber],
  );

  const handleOnChangeCardName = useCallback(
    (value: string) => {
      setCardName(value);
    },
    [cardName],
  );

  const handleOnChangeCardExpired = useCallback(
    (value: string) => {
      setCardExpired(value);
    },
    [cardExpired],
  );

  const handleOnChangeCardCVV = useCallback(
    (value: string) => {
      setCardCVV(value);
    },
    [cardCVV],
  );

  const handleOnFocusCardCVV = useCallback(
    (value: boolean) => {
      setCardCVVFocused(value);
    },
    [cardCVV],
  );

  const handleOnBlurCardCVV = useCallback(
    (value: boolean) => {
      setCardCVVFocused(value);
    },
    [cardCVV],
  );

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

            <S.BoxPageInfoLinkMobile>
              <S.BoxPageInfoLinkIconMobile>
                <ArrowIcon width={20} height={20} direction="left" color={theme.pallete.white} />
              </S.BoxPageInfoLinkIconMobile>
              <Text modifiers={['white', 'body']}>
                <b>Etapa 2</b> de 3
              </Text>
            </S.BoxPageInfoLinkMobile>

            <S.BoxPageInfoTitle>
              <S.BoxPageInfoImage>
                <CardRoundedIcon width={50} height={50} color={theme.pallete.white} />
              </S.BoxPageInfoImage>

              <Text htmlTagName="h1" modifiers={['white', 'title', 'bold']}>
                Adicione um novo cartão de crédito
              </Text>
            </S.BoxPageInfoTitle>

            <S.BoxCreditCard>
              <CreditCard
                number={cardNumber}
                name={cardName}
                expired={cardExpired}
                cvv={cardCVV}
                isBackOpen={cardCVVFocused}
              />
            </S.BoxCreditCard>
          </S.BoxPageInfo>

          <S.BoxPageForm>
            <S.BoxFormStep>
              <S.BoxFormStepItem>
                <S.BoxFormStepNumber>
                  <StepNumber modifiers="rounded" checked />
                </S.BoxFormStepNumber>

                <Text modifiers={['primary', 'tag']}>Carrinho</Text>

                <S.BoxFormStepIcon>
                  <ArrowIcon color={theme.pallete.primary} width={15} height={15} direction="right" />
                </S.BoxFormStepIcon>
              </S.BoxFormStepItem>

              <S.BoxFormStepItem>
                <S.BoxFormStepNumber>
                  <StepNumber modifiers="outlined" number={2} />
                </S.BoxFormStepNumber>

                <Text modifiers={['primary', 'tag']}>Pagamento</Text>

                <S.BoxFormStepIcon>
                  <ArrowIcon color={theme.pallete.primary} width={15} height={15} direction="right" />
                </S.BoxFormStepIcon>
              </S.BoxFormStepItem>

              <S.BoxFormStepItem>
                <S.BoxFormStepNumber>
                  <StepNumber modifiers="outlined" number={3} />
                </S.BoxFormStepNumber>

                <Text modifiers={['primary', 'tag']}>Confirmação</Text>
              </S.BoxFormStepItem>
            </S.BoxFormStep>

            <CheckoutForm
              cardNumber={{
                onChange: handleOnChangeCardNumber,
              }}
              cardName={{
                onChange: handleOnChangeCardName,
              }}
              cardExpired={{
                onChange: handleOnChangeCardExpired,
              }}
              cardCVV={{
                onChange: handleOnChangeCardCVV,
                onFocus: handleOnFocusCardCVV,
                onBlur: handleOnBlurCardCVV,
              }}
            />
          </S.BoxPageForm>
        </S.BoxPage>

        <S.BoxSidebar>
          <Card height={1.8} modifiers={['borderRadius', 'bgGrayLight']} />

          <S.BoxSidebarDivider>
            <S.BoxSidebarCardItem>
              <Card height={1.2} width={65} modifiers={['borderRadius', 'bgGrayLight']} />
              <Card height={1.2} width={20} modifiers={['borderRadius', 'bgGrayLight']} />
            </S.BoxSidebarCardItem>

            <S.DividerCard />

            <S.BoxSidebarCardItem>
              <Card height={1.2} width={65} modifiers={['borderRadius', 'bgGrayLight']} />
              <Card height={1.2} width={20} modifiers={['borderRadius', 'bgGrayLight']} />
            </S.BoxSidebarCardItem>

            <S.DividerCard />

            <S.BoxSidebarCardItem>
              <Card height={1.2} width={65} modifiers={['borderRadius', 'bgGrayLight']} />
              <Card height={1.2} width={20} modifiers={['borderRadius', 'bgGrayLight']} />
            </S.BoxSidebarCardItem>
          </S.BoxSidebarDivider>

          <S.BoxSidebarCardItem>
            <Card height={1.2} width={60} modifiers={['borderRadius', 'bgGrayDark']} />
            <Card height={1.2} width={20} modifiers={['borderRadius', 'bgGrayDark']} />
          </S.BoxSidebarCardItem>
        </S.BoxSidebar>
      </Container>
    </>
  );
};

export default CheckoutPage;
