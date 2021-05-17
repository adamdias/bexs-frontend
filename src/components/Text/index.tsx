import React from 'react';

import * as S from './styled';

export type TextProps = {
  htmlTagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | undefined;
  modifiers?: S.TextModifier | S.TextModifier[] | undefined;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ htmlTagName = 'p', modifiers, children }) => {
  const NewTextStyledComponent = S.Text.withComponent(htmlTagName);

  return <NewTextStyledComponent modifiers={modifiers}>{children}</NewTextStyledComponent>;
};

export default Text;
