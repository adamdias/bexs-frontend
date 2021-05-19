import { compareAsc } from 'date-fns';
import isCreditCardNumberValid from 'global/helpers/isCreditCardNumberValid';
import * as Yup from 'yup';

const fieldsValidationSchema = {
  cardNumber: Yup.string()
    .nullable()
    .required('Campo obrigatório')
    .test('cardNumber', 'Número de cartão inválido', (value) => {
      if (value == null) return false;
      return isCreditCardNumberValid(value);
    }),
  cardName: Yup.string()
    .nullable()
    .required('Campo obrigatório')
    .test('cardName', 'Insira seu nome completo', (value) => {
      if (value == null) return false;
      if (value.length === 0) return false;
      return value.trim().split(' ').length > 1;
    }),
  cardExpired: Yup.string()
    .nullable()
    .required('Campo obrigatório')
    .test('cardExpired', 'Data inválida', (value) => {
      if (value == null) return false;

      const [strMM, strYY] = value.split('/');
      const mm = Number(strMM);
      const yy = Number(strYY);

      if (mm < 0 || mm > 12) return false;
      if (yy < 0 || yy > 99) return false;

      const expired = new Date(Number(`20${yy}`), mm, 1);
      const today = new Date();

      return compareAsc(expired, today) > -1;
    }),
  cardCVV: Yup.string().nullable().required('Campo obrigatório').min(3, 'Código inválido').max(3, 'Código inválido'),
  cardInstallment: Yup.string()
    .nullable()
    .required('Insira o número de parcelas')
    .test('cardInstallment', 'Insira o número de parcelas', (value) => {
      if (value === 'firstDisabled') {
        return false;
      }

      return true;
    }),
};

const validationSchema = Yup.object().shape(fieldsValidationSchema);

export default validationSchema;
