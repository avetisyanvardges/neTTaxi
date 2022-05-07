import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const CashIcon = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.75 6.667a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-1.25 2.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M1.667 6.042c0-1.036.839-1.875 1.875-1.875h10.416c1.036 0 1.875.84 1.875 1.875v6.25c0 1.035-.84 1.875-1.875 1.875H3.542a1.875 1.875 0 01-1.875-1.875v-6.25zm1.875-.625a.625.625 0 00-.625.625v.625h.625c.345 0 .625-.28.625-.625v-.625h-.625zm-.625 5h.625c1.035 0 1.875.84 1.875 1.875v.625h6.666v-.625c0-1.036.84-1.875 1.875-1.875h.625v-2.5h-.625a1.875 1.875 0 01-1.875-1.875v-.625H5.416v.625c0 1.035-.839 1.875-1.875 1.875h-.624v2.5zm11.666-3.75v-.625a.625.625 0 00-.625-.625h-.625v.625c0 .345.28.625.625.625h.625zm0 5h-.625a.625.625 0 00-.625.625v.625h.625c.345 0 .625-.28.625-.625v-.625zm-11.666.625c0 .345.28.625.625.625h.625v-.625a.625.625 0 00-.625-.625h-.625v.625z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M3.668 15.417a2.499 2.499 0 002.166 1.25h8.541a3.958 3.958 0 003.959-3.959V8.333a2.5 2.5 0 00-1.25-2.165v6.54a2.708 2.708 0 01-2.709 2.709H3.668z"
        fill="url(#paint2_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={6.25}
          y1={9.16669}
          x2={11.25}
          y2={9.16669}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={1.6665}
          y1={9.16669}
          x2={15.8332}
          y2={9.16669}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={3.66797}
          y1={11.4172}
          x2={18.3335}
          y2={11.4172}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {CashIcon};
