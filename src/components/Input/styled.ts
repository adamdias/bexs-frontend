import InputMask from 'react-input-mask';

import styled from 'styled-components';
import { applyStyleModifiers, ModifierConfigValue } from 'styled-components-modifiers';

import { LabelProps, InputProps } from '.';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 6.2rem;
`;

export type LabelModifiersConfig = {
  focused: ModifierConfigValue;
};

export type LabelModifier = keyof LabelModifiersConfig;

export const LABEL_MODIFIERS: LabelModifiersConfig = {
  focused: ({ theme: { text } }) => `
    transform: translateY(-2.3rem);
    font-size: ${text.tag.fontSize};
  `,
};

export const Label = styled.label<LabelProps>`
  width: 100%;
  position: absolute;
  transition: all 0.2s ease;
  top: 1rem;
  color: ${({ theme: { pallete } }) => pallete.gray};
  font-family: ${({ theme: { text } }) => text.body.fontFamily};
  font-size: ${({ theme: { text } }) => text.body.fontSize};

  ${applyStyleModifiers(LABEL_MODIFIERS)};
`;

export type InputModifiersConfig = {
  error: ModifierConfigValue;
};

export type InputModifier = keyof InputModifiersConfig;

export const INPUT_MODIFIERS: InputModifiersConfig = {
  error: ({ theme: { pallete } }) => `
    border-bottom: 1px solid ${pallete.primary};
    margin-bottom: 0.5rem;
  `,
};

export const Input = styled(InputMask)<InputProps>`
  width: 100%;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${({ theme: { pallete } }) => pallete.gray};
  transition: all 0.2s ease;
  background-color: transparent;
  padding: 0.5rem 0;
  font-size: ${({ theme: { text } }) => text.body.fontSize};
  font-family: ${({ theme: { text } }) => text.body.fontFamily};
  color: ${({ theme: { pallete } }) => pallete.black};

  ${applyStyleModifiers(INPUT_MODIFIERS)};
`;
