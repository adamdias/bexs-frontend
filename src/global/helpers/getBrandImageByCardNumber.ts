import MastercardLogoImage from 'global/assets/images/credit-card-mastercard.png';
import VisaLogoImage from 'global/assets/images/credit-card-visa.png';

const getBrandImageByCardNumber = (number: string) => {
  const formatedNumber = number.replace(/\s/g, '');
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

  if (visaRegex.test(formatedNumber)) {
    return VisaLogoImage;
  }

  if (mastercardRegex.test(formatedNumber)) {
    return MastercardLogoImage;
  }
};

export default getBrandImageByCardNumber;
