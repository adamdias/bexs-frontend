import ArrowDownIconImage from 'global/assets/images/icon-arrow-down.png';
import styled from 'styled-components';
import { applyStyleModifiers, ModifierConfigValue } from 'styled-components-modifiers';

import { SelectProps } from '.';

export const Box = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 6.2rem;
`;

export type SelectModifiersConfig = {
  error: ModifierConfigValue;
};

export type SelectModifier = keyof SelectModifiersConfig;

export const SELECT_MODIFIERS: SelectModifiersConfig = {
  error: ({ theme: { pallete } }) => `
    border-bottom: 1px solid ${pallete.primary};
    margin-bottom: 0.5rem;
  `,
};

export const Select = styled.select<SelectProps>`
  width: 100%;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${({ theme: { pallete } }) => pallete.gray};
  transition: all 0.2s ease;
  background-color: transparent;
  padding: 0.5rem 0;
  font-size: ${({ theme: { text } }) => text.body.fontSize};
  font-family: ${({ theme: { text } }) => text.body.fontFamily};
  color: ${({ theme: { pallete }, value }) => (value == 'firstDisabled' ? pallete.gray : pallete.black)};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  option {
    color: ${({ theme: { pallete } }) => pallete.black};
  }

  option:disabled {
    color: ${({ theme: { pallete } }) => pallete.gray};
  }

  background-image: url(${ArrowDownIconImage});
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: right 1rem;

  ${applyStyleModifiers(SELECT_MODIFIERS)};
`;
