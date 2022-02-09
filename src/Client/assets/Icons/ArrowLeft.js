import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const ArrowLeft = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.999692 8.29764L9.00992 0.287559C9.19519 0.102146 9.4425 0 9.70621 0C9.96991 0 10.2172 0.102146 10.4025 0.287559L10.9924 0.87731C11.3762 1.2616 11.3762 1.88618 10.9924 2.26988L4.26601 8.99627L10.9999 15.7301C11.1851 15.9155 11.2874 16.1627 11.2874 16.4263C11.2874 16.6901 11.1851 16.9373 10.9999 17.1228L10.41 17.7124C10.2245 17.8979 9.97738 18 9.71367 18C9.44997 18 9.20265 17.8979 9.01738 17.7124L0.999692 9.69504C0.813987 9.50904 0.711987 9.26071 0.712573 8.99671C0.711987 8.73169 0.813987 8.48349 0.999692 8.29764Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="10.3426"
          y1="4.23529"
          x2="0.257184"
          y2="4.38418"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {ArrowLeft};
