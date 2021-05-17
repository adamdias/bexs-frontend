import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import { Text } from 'components';

import * as S from './styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
}

export type LabelProps = {
  modifiers?: S.LabelModifier | S.LabelModifier[] | undefined;
};
export type InputProps = {
  modifiers?: S.InputModifier | S.InputModifier[] | undefined;
};

const Input = React.forwardRef<HTMLInputElement, Props>(({ label, hasError, errorMessage, ...inputProps }, ref) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleOnFocus = useCallback(
    (e) => {
      setFocused(true);

      if (inputProps.onFocus) {
        inputProps.onFocus(e);
      }
    },
    [inputProps.onFocus],
  );

  const handleOnBlur = useCallback(
    (e) => {
      setFocused(false);

      if (inputProps.onBlur) {
        inputProps.onBlur(e);
      }
    },
    [inputProps.onBlur],
  );

  return (
    <S.Box>
      <S.Label modifiers={focused || String(inputProps.value).length > 0 ? 'focused' : undefined}>{label}</S.Label>
      <S.Input
        {...inputProps}
        ref={ref}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        modifiers={hasError ? 'error' : undefined}
      />
      {hasError && errorMessage != null && <Text modifiers={['primary', 'tag']}>{errorMessage}</Text>}
    </S.Box>
  );
});

export default React.memo(Input);
