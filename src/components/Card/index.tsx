import React from 'react';

import * as S from './styled';

export type CardProps = {
  modifiers?: S.CardModifier | S.CardModifier[] | undefined;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ modifiers, children }) => {
  return <S.Card modifiers={modifiers}>{children}</S.Card>;
};

export default React.memo(Card);
