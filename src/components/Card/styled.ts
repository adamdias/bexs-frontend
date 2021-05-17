import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { ModifierConfigValue } from 'styled-components-modifiers/lib/types';

import { CardProps } from '.';

type CardModifiersConfig = {
  borderRadius: ModifierConfigValue;
  bgBlack: ModifierConfigValue;
  bgWhite: ModifierConfigValue;
  bgPrimary: ModifierConfigValue;
  bgGray: ModifierConfigValue;
  bgGrayLight: ModifierConfigValue;
  bgGrayDark: ModifierConfigValue;
};

export type CardModifier = keyof CardModifiersConfig;

const CARD_MODIFIERS_CONFIG: CardModifiersConfig = {
  borderRadius: () => 'border-radius: 5px',
  bgBlack: ({ theme: { pallete } }) => `background-color: ${pallete.black};`,
  bgWhite: ({ theme: { pallete } }) => `background-color: ${pallete.white};`,
  bgPrimary: ({ theme: { pallete } }) => `background-color: ${pallete.primary};`,
  bgGray: ({ theme: { pallete } }) => `background-color: ${pallete.gray};`,
  bgGrayLight: ({ theme: { pallete } }) => `background-color: ${pallete.grayLight};`,
  bgGrayDark: ({ theme: { pallete } }) => `background-color: ${pallete.grayDark};`,
};

export const Card = styled.div<CardProps>`
  background-color: ${({ theme: { pallete } }) => pallete.white};
  width: 100%;
  ${applyStyleModifiers(CARD_MODIFIERS_CONFIG)};
`;
