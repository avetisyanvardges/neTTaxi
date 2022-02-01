import React from 'react';
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg';

const Message = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.25 15.44l2.69-2.69h8.56a1.5 1.5 0 001.5-1.5V4.5A1.5 1.5 0 0013.5 3H3.75a1.5 1.5 0 00-1.5 1.5v10.94zm0 1.06H1.5v-12a2.25 2.25 0 012.25-2.25h9.75a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25H5.25l-3 3zM4.5 5.25h8.25V6H4.5v-.75zm0 2.25h8.25v.75H4.5V7.5zm0 2.25h6v.75h-6v-.75z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={2.7732}
          y1={5.60294}
          x2={16.358}
          y2={5.94431}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {Message};
