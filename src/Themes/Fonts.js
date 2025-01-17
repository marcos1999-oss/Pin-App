const type = {
  base: "Helvetica",
  bold: "Helvetica",
  emphasis: "Helvetica",
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 10,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: "bold",
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  title: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
  },
};

export default {
  type,
  size,
  style,
};
