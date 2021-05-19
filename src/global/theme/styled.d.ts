import 'styled-components';
import { ButtonTheme } from './button';
import { Pallete } from './pallete';
import { TextTheme } from './text';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallete: Pallete;
    text: TextTheme;
    button: ButtonTheme;
  }
}
