import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { ModifierConfigValue } from 'styled-components-modifiers/lib/types';

import { ButtonStyledProps } from '.';

type ButtonModifiersConfig = {
  primary: ModifierConfigValue;
};

export type ButtonModifier = keyof ButtonModifiersConfig;

const Button_MODIFIERS_CONFIG: ButtonModifiersConfig = {
  primary: ({ theme: { button } }) => `
    background-color: ${button.primary.bgColor};
    color: ${button.primary.fontColor};
    height: ${button.primary.height};
    border-radius: ${button.primary.borderRadius};

    p {
      font-size: ${button.primary.fontSize};
      font-family: ${button.primary.fontFamily};
    }
  `,
};

export const Button = styled.button<ButtonStyledProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  cursor: pointer;

  p {
    text-align: center;
    text-transform: uppercase;
  }

  ${applyStyleModifiers(Button_MODIFIERS_CONFIG)};
`;
