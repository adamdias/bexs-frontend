import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import { Text } from 'components';

import * as S from './styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mask?: string;
  maskChar?: string;
  hasError?: boolean;
  errorMessage?: string;
}

export type LabelProps = {
  modifiers?: S.LabelModifier | S.LabelModifier[] | undefined;
};

export type InputProps = {
  modifiers?: S.InputModifier | S.InputModifier[] | undefined;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, mask = undefined, maskChar = '', hasError, errorMessage, ...inputProps }, ref) => {
    const [focused, setFocused] = useState<boolean>(false);

    const handleOnFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);

        if (inputProps.onFocus) {
          inputProps.onFocus(event);
        }
      },
      [inputProps.onFocus],
    );

    const handleOnBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);

        if (inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      },
      [inputProps.onBlur],
    );

    return (
      <S.Box>
        <S.Label
          htmlFor={inputProps.name}
          modifiers={focused || String(inputProps.value).length > 0 ? 'focused' : undefined}
        >
          {label}
        </S.Label>
        <S.Input
          {...inputProps}
          id={inputProps.name}
          mask={mask}
          maskChar={maskChar}
          ref={ref}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          modifiers={hasError ? 'error' : undefined}
        />
        {hasError && errorMessage != null && <Text modifiers={['primary', 'tag']}>{errorMessage}</Text>}
      </S.Box>
    );
  },
);

export default React.memo(Input);
