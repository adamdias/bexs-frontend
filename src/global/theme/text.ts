export type TextDef = {
  fontSize: string;
  fontFamily: string;
};

export type Text = {
  title: TextDef;
  body: TextDef;
  button: TextDef;
  tag: TextDef;
  caption: TextDef;
  presentation: TextDef;
};

const text: Text = {
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
    fontSize: '2.2rem',
    fontFamily: 'SF Pro Text',
  },
  presentation: {
    fontSize: '1.6rem',
    fontFamily: 'SF Pro Text',
  },
};

export default text;
