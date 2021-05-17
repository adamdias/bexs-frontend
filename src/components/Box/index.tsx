import React from 'react';

import * as S from './styled';

export type BoxProps = {
  children: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ children }) => {
  return <S.Box>{children}</S.Box>;
};

export default Box;
