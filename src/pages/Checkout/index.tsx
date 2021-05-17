import React from 'react';

import { Container, Text } from 'components';

const CheckoutPage = () => {
  return (
    <Container>
      <Text htmlTagName="span" modifiers={['primary', 'caption', 'uppercase']}>
        Testando o componente span
      </Text>

      <Text modifiers={['button', 'bold']}>Testando o componente span</Text>
      <Text modifiers={['button']}>Testando o componente span</Text>

      <Text htmlTagName="h1" modifiers={['primary', 'title', 'bold']}>
        Adicione um novo cartão de crédito
      </Text>
    </Container>
  );
};

export default CheckoutPage;
