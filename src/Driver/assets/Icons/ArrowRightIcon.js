import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const ArrowRightIcon = ({
  IconWidth,
  IconHeight,
  IconColorStart,
  IconColorEnd,
}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 13 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.337952 19.3134C-0.131467 19.7149 -0.109151 20.3478 0.387962 20.727C0.885176 21.1062 1.6687 21.0881 2.13822 20.6866L12.662 11.6866C13.1126 11.3013 13.1127 10.6988 12.662 10.3134L2.13822 1.312C1.6687 0.9104 0.885176 0.8923 0.388062 1.2715C-0.108952 1.6507 -0.131567 2.2836 0.337852 2.6851L10.059 10.9999L0.337952 19.3134Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="13"
          y1="10.9993"
          x2="0"
          y2="10.9993"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {ArrowRightIcon};
