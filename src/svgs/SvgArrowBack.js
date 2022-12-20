import {scaleWidth} from '@utils/dimensions';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowBack(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={scaleWidth(18)}
      height={scaleWidth(18)}
      strokeWidth={3}
      stroke="black"
      {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </Svg>
  );
}

export default SvgArrowBack;
