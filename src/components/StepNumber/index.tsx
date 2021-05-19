import React from 'react';

import { Text } from 'components';
import { CheckIcon } from 'components/Icons';
import { useTheme } from 'styled-components';

import * as S from './styled';

export type StepNumberProps = {
  number?: number;
  checked?: boolean;
  modifiers: S.StepNumberModifier | S.StepNumberModifier[];
};

const StepNumber: React.FC<StepNumberProps> = ({ number = 1, checked = false, modifiers }) => {
  const theme = useTheme();

  return (
    <S.StepNumber modifiers={modifiers} checked={checked}>
      {checked ? (
        <CheckIcon width={12} height={12} color={theme.pallete.white} />
      ) : (
        <Text modifiers={modifiers === 'outlined' ? ['tag', 'bold', 'primary'] : ['tag', 'bold', 'white']}>
          {String(number)}
        </Text>
      )}
    </S.StepNumber>
  );
};

export default React.memo(StepNumber);
