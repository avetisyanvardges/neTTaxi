import React from 'react';
import {Svg, Defs, LinearGradient, Stop, Circle} from 'react-native-svg';

const KetIcon = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx={7.5} cy={7.5} r={7.5} fill="url(#paint0_linear)" />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={0}
          y1={7.5}
          x2={15}
          y2={7.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {KetIcon};
