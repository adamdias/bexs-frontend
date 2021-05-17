import 'styled-components';

declare module 'styled-components' {
  import { Pallete } from './pallete';
  import { Text } from './text';

  export interface DefaultTheme {
    pallete: Pallete;
    text: Text;
  }
}
