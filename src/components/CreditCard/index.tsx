import React from 'react';

import { Text } from 'components';
import getBrandImageByCardNumber from 'global/helpers/getBrandImageByCardNumber';

import * as S from './styled';

export type CreditCardProps = {
  number?: string;
  name?: string;
  expired?: string;
  cvv?: string;
  isBackOpen?: boolean;
};

export type BoxCreditCardProps = {
  isBackOpen?: boolean;
  hasBrandLogo: boolean;
};

const CreditCard = ({ number, name, expired, cvv, isBackOpen }: CreditCardProps) => {
  const brandLogo = getBrandImageByCardNumber(number || '');

  return (
    <S.BoxCreditCard isBackOpen={isBackOpen} hasBrandLogo={brandLogo != null}>
      <S.BoxFront>
        <S.BoxLogoImage>{brandLogo && <img src={brandLogo} height="100%" />}</S.BoxLogoImage>

        <S.BoxNumber>
          <Text modifiers={['caption', 'white']}>{number || '**** **** **** ****'}</Text>
        </S.BoxNumber>

        <S.BoxNameAndExpired>
          <Text modifiers={['uppercase', 'presentation', 'white']}>{name || 'NOME DO TITULAR'}</Text>
          <Text modifiers={['presentation', 'white']}>{expired || '00/00'}</Text>
        </S.BoxNameAndExpired>
      </S.BoxFront>

      <S.BoxBack>
        <S.BoxBackTarget />

        <S.BoxCVV>
          <S.BoxCVVTarget />

          <S.BoxCVVText>
            <Text modifiers={['presentation', 'black']}>{cvv || '***'}</Text>
          </S.BoxCVVText>
        </S.BoxCVV>
      </S.BoxBack>
    </S.BoxCreditCard>
  );
};

export default React.memo(CreditCard);
