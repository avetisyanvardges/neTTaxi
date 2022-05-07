import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const DoublePlus = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13 31.75c0-1.726 1.4-3.125 3.125-3.125h12.5v-12.5a3.125 3.125 0 116.25 0v12.5h12.5a3.125 3.125 0 010 6.25h-12.5v12.5a3.125 3.125 0 11-6.25 0v-12.5h-12.5A3.125 3.125 0 0113 31.75zM13 .5C6.096.5.5 6.096.5 13v37.5C.5 57.404 6.096 63 13 63h37.5C57.404 63 63 57.404 63 50.5V13C63 6.096 57.404.5 50.5.5H13zM6.75 13A6.25 6.25 0 0113 6.75h37.5A6.25 6.25 0 0156.75 13v37.5a6.25 6.25 0 01-6.25 6.25H13a6.25 6.25 0 01-6.25-6.25V13zm46.875 56.25c8.63 0 15.625-6.996 15.625-15.625V8.422A12.495 12.495 0 0175.5 19.25v34.375c0 12.081-9.794 21.875-21.875 21.875H19.25a12.495 12.495 0 01-10.828-6.25h45.203z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={74.7499}
          y1={1.99994}
          x2={0.499919}
          y2={75.4999}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {DoublePlus};
