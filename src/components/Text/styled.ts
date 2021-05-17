import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { ModifierConfigValue } from 'styled-components-modifiers/lib/types';

import { TextProps } from '.';

type TextModifiersConfig = {
  // size
  title: ModifierConfigValue;
  body: ModifierConfigValue;
  tag: ModifierConfigValue;
  button: ModifierConfigValue;
  caption: ModifierConfigValue;
  presentation: ModifierConfigValue;

  // color
  black: ModifierConfigValue;
  white: ModifierConfigValue;
  primary: ModifierConfigValue;
  gray: ModifierConfigValue;
  grayLight: ModifierConfigValue;

  // alignment
  center: ModifierConfigValue;
  left: ModifierConfigValue;
  right: ModifierConfigValue;

  // transform
  uppercase: ModifierConfigValue;

  // weight
  bold: ModifierConfigValue;
};

export type TextModifier = keyof TextModifiersConfig;

const TEXT_MODIFIERS_CONFIG: TextModifiersConfig = {
  // size
  title: ({ theme: { text } }) => `
    font-size: ${text.title.fontSize};
    font-family: ${text.title.fontFamily};
  `,
  body: ({ theme: { text } }) => `
    font-size: ${text.body.fontSize};
    font-family: ${text.body.fontFamily};
  `,
  tag: ({ theme: { text } }) => `
    font-size: ${text.tag.fontSize};
    font-family: ${text.tag.fontFamily};
  `,
  button: ({ theme: { text } }) => `
    font-size: ${text.button.fontSize};
    font-family: ${text.button.fontFamily};
  `,
  caption: ({ theme: { text } }) => `
    font-size: ${text.caption.fontSize};
    font-family: ${text.caption.fontFamily};
  `,
  presentation: ({ theme: { text } }) => `
    font-size: ${text.presentation.fontSize};
    font-family: ${text.presentation.fontFamily};
  `,

  // color
  black: ({ theme: { pallete } }) => `color: ${pallete.black};`,
  white: ({ theme: { pallete } }) => `color: ${pallete.white};`,
  primary: ({ theme: { pallete } }) => `color: ${pallete.primary};`,
  gray: ({ theme: { pallete } }) => `color: ${pallete.gray};`,
  grayLight: ({ theme: { pallete } }) => `color: ${pallete.grayLight};`,

  // alignment
  center: () => 'text-align: center;',
  left: () => 'text-align: left;',
  right: () => 'text-align: right;',

  // transform
  uppercase: () => 'text-transform: uppercase',

  // weight
  bold: () => 'font-weight: bold;',
};

export const Text = styled.p<TextProps>`
  color: ${({ theme: { pallete } }) => pallete.black};
  ${applyStyleModifiers(TEXT_MODIFIERS_CONFIG)};
`;
