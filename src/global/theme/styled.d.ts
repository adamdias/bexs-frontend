import 'styled-components';
import { Pallete } from './pallete';
import { Text } from './text';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallete: Pallete;
    text: Text;
  }
}
