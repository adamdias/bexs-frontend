import React from 'react';

import * as S from './styled';

export type CardProps = {
  modifiers?: S.CardModifier | S.CardModifier[] | undefined;
  children?: React.ReactNode;
  width?: number;
  height?: number;
};

const Card: React.FC<CardProps> = ({ modifiers, children, width, height }) => {
  return (
    <S.Card height={height} width={width} modifiers={modifiers}>
      {children}
    </S.Card>
  );
};

export default Card;
