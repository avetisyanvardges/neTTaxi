import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Non_CashIcon = ({
  IconWidth,
  IconHeight,
  IconColorStart,
  IconColorEnd,
}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.667 6.458a2.292 2.292 0 012.291-2.291h12.084a2.292 2.292 0 012.291 2.291v1.459H1.667V6.458z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M1.667 9.167h16.666v4.375a2.292 2.292 0 01-2.291 2.291H3.957a2.292 2.292 0 01-2.292-2.291V9.167zm11.458 2.916a.625.625 0 000 1.25h2.083a.625.625 0 000-1.25h-2.083z"
        fill="url(#paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={1.6665}
          y1={6.04169}
          x2={18.3332}
          y2={6.04169}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={1.6665}
          y1={12.5}
          x2={18.3332}
          y2={12.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Non_CashIcon};
