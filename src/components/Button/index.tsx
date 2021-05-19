import React from 'react';

import * as S from './styled';

export type ButtonProps = {
  text: string;
  modifiers: S.ButtonModifier | S.ButtonModifier[];
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export type ButtonStyledProps = {
  modifiers: S.ButtonModifier | S.ButtonModifier[];
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({ text, modifiers, onClick }: ButtonProps) => {
  return (
    <S.Button modifiers={modifiers} onClick={onClick}>
      <p>{text}</p>
    </S.Button>
  );
};

export default React.memo(Button);
