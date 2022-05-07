import React from 'react';
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg';

const Moon = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.75 2.707a7.537 7.537 0 005.798 9.097 5.556 5.556 0 01-3.988 1.695c-.069 0-.139.002-.209 0a5.547 5.547 0 01-1.6-10.792zM7.49 1.5a.501.501 0 00-.088.008 6.548 6.548 0 00.913 12.99c.082.004.164 0 .245 0a6.536 6.536 0 005.351-2.777.505.505 0 00-.391-.783A6.54 6.54 0 017.945 2.19a.508.508 0 00-.455-.69z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={3.07328}
          y1={4.55878}
          x2={14.5079}
          y2={4.82388}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Moon};
