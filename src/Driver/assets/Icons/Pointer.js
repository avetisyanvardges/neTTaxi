import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Pointer = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 13 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M.338 19.313c-.47.402-.447 1.035.05 1.414.497.38 1.28.361 1.75-.04l10.524-9c.45-.386.45-.988 0-1.374L2.138 1.312C1.668.91.885.892.388 1.272c-.497.379-.52 1.012-.05 1.413L10.059 11 .338 19.313z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={13}
          y1={10.9993}
          x2={0}
          y2={10.9993}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Pointer};
