import React, { useCallback, useEffect, useState } from 'react';

import { Container, Header, Text, Input } from 'components';
import iconCard from 'global/assets/images/icon-card.svg';

import * as S from './styled';

const CheckoutPage = () => {
  const [cardName, setCardName] = useState<string>('');

  const handleOnChange = useCallback(
    (e) => {
      setCardName(e.target.value);
    },
    [cardName],
  );

  useEffect(() => {
    console.log(cardName);
  }, [cardName]);

  return (
    <>
      <Header />
      <Container>
        <S.BoxPage>
          <S.BoxPageInfo>
            <Text modifiers={['white', 'tag']}>Alterar forma de pagamento</Text>

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

            <S.BoxForm>
              <Input
                value={cardName}
                label="Nome (igual ao cartão)"
                name="card_name"
                onChange={handleOnChange}
                hasError
                errorMessage="E-mail inválido, coloque outro!"
              />

              <Input value={cardName} label="Nome (igual ao cartão)" name="card_name" onChange={handleOnChange} />
            </S.BoxForm>
          </S.BoxPageForm>
        </S.BoxPage>
      </Container>
    </>
  );
};

export default CheckoutPage;
