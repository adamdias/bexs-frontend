import React, { InputHTMLAttributes } from 'react';

import { Text } from 'components';

import * as S from './styled';

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  errorMessage?: string;
}

export type SelectProps = {
  modifiers?: S.SelectModifier | S.SelectModifier[] | undefined;
};

const Select = React.forwardRef<HTMLSelectElement, Props>(({ hasError, errorMessage, ...selectProps }, ref) => {
  return (
    <S.Box>
      <S.Select
        id={selectProps.name}
        ref={ref}
        value={selectProps.value}
        modifiers={hasError ? 'error' : undefined}
        {...selectProps}
      />

      {hasError && errorMessage != null && <Text modifiers={['primary', 'tag']}>{errorMessage}</Text>}
    </S.Box>
  );
});

export default React.memo(Select);
