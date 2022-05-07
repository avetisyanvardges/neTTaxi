import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Message = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.987 1.018a.586.586 0 00-.781-.67L.378 7.535a.586.586 0 00-.002 1.094l5.289 2.043v6.434a.586.586 0 001.11.263l2.187-4.34L14.3 16.99a.586.586 0 00.91-.3C20.194.35 19.978 1.06 19.987 1.019zm-4.647 2.06L6.168 9.61 2.22 8.086 15.34 3.078zm-8.503 7.494l7.995-5.694c-6.88 7.258-6.52 6.876-6.55 6.916-.045.06.077-.174-1.445 2.847v-4.07zm7.494 4.982l-4.699-3.487 8.497-8.963-3.798 12.45z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={0.000976563}
          y1={8.99992}
          x2={20.001}
          y2={8.99992}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Message};
