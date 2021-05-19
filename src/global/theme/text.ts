export type TextDef = {
  fontSize: string;
  fontFamily: string;
};

export type TextTheme = {
  title: TextDef;
  body: TextDef;
  button: TextDef;
  tag: TextDef;
  caption: { textShadow: string; letterSpacing: string } & TextDef;
  presentation: { textShadow: string } & TextDef;
};

const text: TextTheme = {
  title: {
    fontSize: '2rem',
    fontFamily: 'Verdana',
  },
  body: {
    fontSize: '1.7rem',
    fontFamily: 'Verdana',
  },
  tag: {
    fontSize: '1.3rem',
    fontFamily: 'Verdana',
  },
  button: {
    fontSize: '1.7rem',
    fontFamily: 'SF Pro Text',
  },
  caption: {
    fontSize: '2.4rem',
    fontFamily: 'SF Pro Text',
    textShadow: '0px 1px 2px #000000B3',
    letterSpacing: '5px',
  },
  presentation: {
    fontSize: '1.6rem',
    fontFamily: 'SF Pro Text',
    textShadow: '0px 1px 2px #000000B3',
  },
};

export default text;
