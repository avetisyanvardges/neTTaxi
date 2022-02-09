import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const ArrowRight = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.667 6.915L4.992.24a.815.815 0 00-.58-.24.815.815 0 00-.58.24L3.34.73c-.32.32-.32.84 0 1.16l5.605 5.606-5.612 5.611a.815.815 0 00-.24.58c0 .22.086.426.24.581l.492.491c.155.155.36.24.58.24.22 0 .426-.085.58-.24l6.682-6.68a.815.815 0 00.24-.583.815.815 0 00-.24-.582z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={3.88117}
          y1={3.52941}
          x2={12.2857}
          y2={3.65348}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {ArrowRight};
