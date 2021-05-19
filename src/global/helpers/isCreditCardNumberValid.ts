const isCreditCardNumberValid = (number: string) => {
  const formatedNumber = number.replace(/\s/g, '');
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

  return visaRegex.test(formatedNumber) || mastercardRegex.test(formatedNumber);
};

export default isCreditCardNumberValid;
