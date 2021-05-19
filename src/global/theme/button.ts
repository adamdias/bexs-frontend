import pallete from './pallete';
import text from './text';

export type ButtonTheme = {
  primary: {
    bgColor: string;
    fontColor: string;
    fontSize: string;
    fontFamily: string;
    height: string;
    borderRadius: string;
  };
};

const button: ButtonTheme = {
  primary: {
    bgColor: pallete.primary,
    fontColor: pallete.white,
    fontSize: text.button.fontSize,
    fontFamily: text.button.fontFamily,
    height: '5rem',
    borderRadius: '1rem',
  },
};

export default button;
