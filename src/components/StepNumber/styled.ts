import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { ModifierConfigValue } from 'styled-components-modifiers/lib/types';

import { StepNumberProps } from '.';

type StepNumberModifiersConfig = {
  outlined: ModifierConfigValue;
  rounded: ModifierConfigValue;
};

export type StepNumberModifier = keyof StepNumberModifiersConfig;

const StepNumber_MODIFIERS_CONFIG: StepNumberModifiersConfig = {
  outlined: ({ theme: { pallete } }) => `
    border: 1px solid ${pallete.primary};
    border-radius: 10rem;
  `,
  rounded: ({ theme: { pallete } }) => `
    border: 1px solid ${pallete.primary};
    background-color: ${pallete.primary};
    border-radius: 10rem;
  `,
};

export const StepNumber = styled.div<StepNumberProps>`
  padding: ${({ checked }) => (checked ? '0.55rem' : '0.55rem 0.75rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  ${applyStyleModifiers(StepNumber_MODIFIERS_CONFIG)};
`;
