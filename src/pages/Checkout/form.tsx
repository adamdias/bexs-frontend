import React, { useState, useCallback } from 'react';

import { Input, Select } from 'components';

import * as S from './styled';

const CheckoutForm = () => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [cardExpired, setCardExpired] = useState<string>('');
  const [cardCVV, setCardCVV] = useState<string>('');
  const [cardInstallment, setCardInstallment] = useState<string>('firstDisabled');

  const handleOnChangeCardNumber = useCallback(
    (e) => {
      setCardNumber(e.target.value);
    },
    [cardNumber],
  );

  const handleOnChangeCardName = useCallback(
    (e) => {
      setCardName(e.target.value);
    },
    [cardName],
  );

  const handleOnChangeCardExpired = useCallback(
    (e) => {
      setCardExpired(e.target.value);
    },
    [cardExpired],
  );

  const handleOnChangeCardCVV = useCallback(
    (e) => {
      setCardCVV(e.target.value);
    },
    [cardCVV],
  );

  const handleOnChangeCardInstallment = useCallback(
    (e) => {
      console.log(e.target.value);
      setCardInstallment(e.target.value);
    },
    [cardInstallment],
  );

  return (
    <S.BoxForm>
      <Input
        type="text"
        value={cardNumber}
        label="Número do cartão"
        name="card_number"
        onChange={handleOnChangeCardNumber}
        mask="9999 9999 9999 9999"
      />

      <Input
        type="text"
        value={cardName}
        label="Nome (igual ao cartão)"
        name="card_name"
        onChange={handleOnChangeCardName}
      />

      <S.BoxFormFields>
        <S.BoxFormFieldItem>
          <Input
            type="text"
            value={cardExpired}
            label="Validade"
            name="card_expired"
            onChange={handleOnChangeCardExpired}
            mask="99/99"
          />
        </S.BoxFormFieldItem>

        <S.BoxFormFieldItem>
          <Input type="text" value={cardCVV} label="CVV" name="card_cvv" onChange={handleOnChangeCardCVV} mask="999" />
        </S.BoxFormFieldItem>
      </S.BoxFormFields>

      <Select value={cardInstallment} name="card_installment" onChange={handleOnChangeCardInstallment}>
        <option disabled value="firstDisabled">
          Número de parcelas
        </option>
        <option value="10">10x R$700,00 sem juros</option>
        <option value="11">11x R$800,00 sem juros</option>
        <option value="12">12x R$1.000,00 sem juros</option>
      </Select>
    </S.BoxForm>
  );
};

export default React.memo(CheckoutForm);
