import React from 'react';

import { Container } from 'components';

import logo from '../../global/assets/images/logo.svg';
import * as S from './styled';

const Header = () => {
  return (
    <S.Box>
      <Container>
        <S.Content>
          <S.BoxImg>
            <img src={logo} alt="logo" />
          </S.BoxImg>

          <S.BoxMenu>
            <S.MenuItem />
            <S.MenuItem />
            <S.MenuItem />
            <S.MenuItem />
            <S.MenuItem />
          </S.BoxMenu>
        </S.Content>
      </Container>
    </S.Box>
  );
};

export default React.memo(Header);
