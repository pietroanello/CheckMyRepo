import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthDesign = 360;
const heightDesign = 640;

const scaleWidth = width => {
  return (width * windowWidth) / widthDesign;
};

const scaleHeight = height => {
  return (height * windowHeight) / heightDesign;
};

const getFontSize = size => {
  switch (size) {
    case 'display1':
      return 35;
    default:
      return 17.5;
  }
};

const getFontWeight = weight => {
  switch (weight) {
    case 'light':
      return 'OpenSans-Light';
    case 'medium':
      return 'OpenSans-Medium';
    case 'bold':
      return 'OpenSans-Bold';
    case 'extrabold':
      return 'OpenSans-ExtraBold';
    default:
      return 'OpenSans-Regular';
  }
};

export {scaleWidth, scaleHeight, getFontSize, getFontWeight};
