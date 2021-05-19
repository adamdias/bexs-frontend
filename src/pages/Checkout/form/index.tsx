import React, { useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Input, Select, Button } from 'components';
import { useFormik } from 'formik';
import removeAscent from 'global/helpers/removeAscent';
import PaymentService, { PaymentCheckoutResponse } from 'global/services/payment';

import * as S from '../styled';
import validationSchema from './validationSchema';

type Props = {
  cardNumber: {
    onChange: (value: string) => void;
  };
  cardName: {
    onChange: (value: string) => void;
  };
  cardExpired: {
    onChange: (value: string) => void;
  };
  cardCVV: {
    onChange: (value: string) => void;
    onFocus: (value: boolean) => void;
    onBlur: (value: boolean) => void;
  };
};

export type CheckoutFormState = {
  cardNumber: string;
  cardName: string;
  cardExpired: string;
  cardCVV: string;
  cardInstallment: string;
};

const CheckoutForm = ({ cardNumber, cardName, cardExpired, cardCVV }: Props) => {
  const handleOnClickSubmit = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    submitForm();
  }, []);

  const handleOnSubmit = async () => {
    try {
      const data: PaymentCheckoutResponse = await PaymentService.paymentCheckout(values);
      console.log(data.id);
    } catch (err) {
      toast.error('Algo não deu certo, por favor revise os dados informado no formulário!');
    }
  };

  const { setFieldValue, values, errors, submitForm } = useFormik<CheckoutFormState>({
    onSubmit: handleOnSubmit,
    validationSchema,
    initialValues: {
      cardNumber: '',
      cardName: '',
      cardExpired: '',
      cardCVV: '',
      cardInstallment: 'firstDisabled',
    },
  });

  const handleSetFieldValue = useCallback((fieldName: keyof CheckoutFormState) => {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const text: string = event.target.value;
      let newText: string | undefined = undefined;

      if (fieldName === 'cardNumber') {
        cardNumber.onChange(text);
      }

      if (fieldName === 'cardName') {
        newText = removeAscent(text).toLocaleUpperCase();
        cardName.onChange(newText);
      }

      if (fieldName === 'cardExpired') {
        cardExpired.onChange(text);
      }

      if (fieldName === 'cardCVV') {
        cardCVV.onChange(text);
      }

      setFieldValue(fieldName, newText || text);
    };
  }, []);

  const handleOnFocusCardCVV = () => {
    cardCVV.onFocus(true);
  };

  const handleOnBlurCardCVV = () => {
    cardCVV.onFocus(false);
  };

  return (
    <S.BoxForm method="post">
      <Input
        type="text"
        value={values.cardNumber}
        label="Número do cartão"
        name="cardNumber"
        onChange={handleSetFieldValue('cardNumber')}
        mask="9999 9999 9999 9999"
        hasError={errors.cardNumber != null}
        errorMessage={errors.cardNumber}
      />

      <Input
        type="text"
        value={values.cardName}
        label="Nome (igual ao cartão)"
        name="cardName"
        maxLength={26}
        style={{ textTransform: 'uppercase' }}
        onChange={handleSetFieldValue('cardName')}
        hasError={errors.cardName != null}
        errorMessage={errors.cardName}
      />

      <S.BoxFormFields>
        <S.BoxFormFieldItem>
          <Input
            type="text"
            value={values.cardExpired}
            label="Validade"
            name="cardExpired"
            onChange={handleSetFieldValue('cardExpired')}
            mask="99/99"
            hasError={errors.cardExpired != null}
            errorMessage={errors.cardExpired}
          />
        </S.BoxFormFieldItem>

        <S.BoxFormFieldItem>
          <Input
            type="text"
            value={values.cardCVV}
            label="CVV"
            name="cardCVV"
            onChange={handleSetFieldValue('cardCVV')}
            onFocus={handleOnFocusCardCVV}
            onBlur={handleOnBlurCardCVV}
            hasError={errors.cardCVV != null}
            errorMessage={errors.cardCVV}
            mask="999"
          />
        </S.BoxFormFieldItem>
      </S.BoxFormFields>

      <Select
        value={values.cardInstallment}
        name="cardInstallment"
        onChange={handleSetFieldValue('cardInstallment')}
        hasError={errors.cardInstallment != null}
        errorMessage={errors.cardInstallment}
      >
        <option disabled value="firstDisabled">
          Número de parcelas
        </option>
        <option value="10">10x R$700,00 sem juros</option>
        <option value="11">11x R$800,00 sem juros</option>
        <option value="12">12x R$1.000,00 sem juros</option>
      </Select>

      <S.BoxFormButtonAlignRight>
        <S.BoxFormButtonSize>
          <Button text="Continuar" onClick={handleOnClickSubmit} modifiers="primary" />
        </S.BoxFormButtonSize>
      </S.BoxFormButtonAlignRight>

      <ToastContainer />
    </S.BoxForm>
  );
};

export default React.memo(CheckoutForm);
