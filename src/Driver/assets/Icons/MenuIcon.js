import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const MenuIcon = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.15625 6.1875H27.8437V8.25H5.15625V6.1875Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M5.15625 15.4688H27.8437V17.5312H5.15625V15.4688Z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M5.15625 24.75H27.8437V26.8125H5.15625V24.75Z"
        fill="url(#paint2_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="7.18331"
          y1="6.67279"
          x2="27.2892"
          y2="12.2304"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="7.18331"
          y1="15.954"
          x2="27.2892"
          y2="21.5117"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1="7.18331"
          y1="25.2353"
          x2="27.2892"
          y2="30.7929"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {MenuIcon};
