import React from 'react';
import {Svg, Path, Stop, Defs, LinearGradient} from 'react-native-svg';

const CurrentLocationIcon = ({
  IconWidth,
  IconHeight,
  IconColorStart,
  IconColorEnd,
}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 5.772A5.234 5.234 0 005.772 11 5.234 5.234 0 0011 16.228 5.234 5.234 0 0016.228 11 5.234 5.234 0 0011 5.772zm0 9.167A3.943 3.943 0 017.061 11 3.943 3.943 0 0111 7.061 3.943 3.943 0 0114.939 11 3.943 3.943 0 0111 14.939z"
        fill="url(#paint0_linear_667_82)"
      />
      <Path
        d="M11 8.135A2.869 2.869 0 008.135 11 2.869 2.869 0 0011 13.865 2.869 2.869 0 0013.865 11 2.869 2.869 0 0011 8.135z"
        fill="url(#paint1_linear_667_82)"
      />
      <Path
        d="M20.026 10.355c-.317-4.476-3.905-8.064-8.381-8.38V0h-1.29v1.974c-4.476.317-8.064 3.905-8.38 8.381H0v1.29h1.974c.317 4.476 3.905 8.064 8.381 8.38V22h1.29v-1.974c4.476-.317 8.064-3.905 8.38-8.381H22v-1.29h-1.974zm-1.293 1.29a7.772 7.772 0 01-7.088 7.088v-1.04h-1.29v1.04a7.772 7.772 0 01-7.088-7.088h1.04v-1.29h-1.04a7.772 7.772 0 017.088-7.088v1.04h1.29v-1.04a7.772 7.772 0 017.088 7.088h-1.04v1.29h1.04z"
        fill="url(#paint2_linear_667_82)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_667_82"
          x1={4.85601}
          y1={4.11463}
          x2={16.793}
          y2={4.46953}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3C449F" />
          <Stop offset={0.0001} stopColor={IconColorEnd} />
          <Stop offset={0.9998} stopColor={IconColorStart} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_667_82"
          x1={7.63233}
          y1={7.22596}
          x2={14.1752}
          y2={7.4205}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3C449F" />
          <Stop offset={0.0001} stopColor={IconColorEnd} />
          <Stop offset={0.9998} stopColor={IconColorStart} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_667_82"
          x1={-1.92784}
          y1={-3.4878}
          x2={23.1892}
          y2={-2.74103}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3C449F" />
          <Stop offset={0.0001} stopColor={IconColorEnd} />
          <Stop offset={0.9998} stopColor={IconColorStart} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {CurrentLocationIcon};
