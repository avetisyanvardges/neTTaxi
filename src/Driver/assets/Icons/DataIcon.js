import React from 'react';
import {Svg, Path, Stop, Defs, LinearGradient} from 'react-native-svg';

const DataIcon = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.1406 0H5.85938V3.55469H14.1406V0Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M15.3125 4.72656H4.6875V7.07031H15.3125V4.72656Z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M3.51562 8.24219V10.5859H6.68793L7.8598 11.7578H12.1402L13.3121 10.5859H16.4844V8.24219H3.51562Z"
        fill="url(#paint2_linear)"
      />
      <Path
        d="M19.9312 10.5859L18.7595 1.21094H15.3125V3.55469H16.4844V7.07031H17.6562V10.5859H19.9312Z"
        fill="url(#paint3_linear)"
      />
      <Path
        d="M1.24058 1.21094L0.072998 10.5859H2.34378V7.07031H3.51565V3.55469H4.68753V1.21094H1.24058Z"
        fill="url(#paint4_linear)"
      />
      <Path
        d="M11.7969 15.8594H8.20312V17.0312H11.7969V15.8594Z"
        fill="url(#paint5_linear)"
      />
      <Path
        d="M19.9958 11.7578H13.7973L12.6254 12.9297H7.37457L6.2027 11.7578H0V20H20L19.9958 11.7578ZM12.9688 18.2031H7.03125V14.6875H12.9688V18.2031Z"
        fill="url(#paint6_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="5.85938"
          y1="1.77734"
          x2="14.1406"
          y2="1.77734"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="4.6875"
          y1="5.89844"
          x2="15.3125"
          y2="5.89844"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1="3.51563"
          y1="10"
          x2="16.4844"
          y2="10"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1="15.3125"
          y1="5.89844"
          x2="19.9312"
          y2="5.89844"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1="0.072998"
          y1="5.89844"
          x2="4.68753"
          y2="5.89844"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1="8.20313"
          y1="16.4453"
          x2="11.7969"
          y2="16.4453"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1="0"
          y1="15.8789"
          x2="20"
          y2="15.8789"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {DataIcon};
