import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const About = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.667 8A6.666 6.666 0 111.334 8a6.666 6.666 0 0113.333 0zm-7.334 3.667a.667.667 0 101.334 0V7a.667.667 0 10-1.334 0v4.667zM8 5a.667.667 0 110-1.333A.667.667 0 018 5z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={2.52461}
          y1={4.47075}
          x2={15.2356}
          y2={4.79016}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {About};
