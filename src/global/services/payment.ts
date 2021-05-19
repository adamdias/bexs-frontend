import { CheckoutFormState } from 'pages/Checkout/form';

import api from './api';

export type PaymentCheckoutPayload = CheckoutFormState;
export type PaymentCheckoutData = {
  id: number;
};

const paymentCheckout = async (payload: PaymentCheckoutPayload) => {
  try {
    const response = await api.post('/v1/payments/checkout', payload);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const PaymentService = {
  paymentCheckout,
};

export default PaymentService;
