import {
  green600,
  green800,
  grey600,
  white,
  green100,
  green300,
  grey400,
  green200,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';
import { spacing, getMuiTheme } from 'material-ui/styles';

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: green800,
    primary2Color: green600,
    primary3Color: grey600,
    accent1Color: green300,
    accent2Color: green200,
    accent3Color: green100,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

export default getMuiTheme(rawBaseTheme);
