import React from 'react';
import {Svg, Path, G, Defs, Stop, LinearGradient} from 'react-native-svg';

const SecurityIcon = ({
  IconWidth,
  IconHeight,
  IconColorStart,
  IconColorEnd,
}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0)">
        <Path
          d="M22.2746 7.30542L20.249 12.3235L22.7182 13.0022L25.0001 8.0536L22.2746 7.30542Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M7.63661 1.491C7.49904 1.45342 7.35709 1.4338 7.21451 1.43213C6.49242 1.43276 5.85989 1.91644 5.67013 2.61327L4.17898 8.02695C4.06667 8.43695 4.12053 8.87471 4.32866 9.24546C4.53595 9.61705 4.885 9.88885 5.29604 9.99887L18.5602 13.6435L21.8842 5.40831L7.63661 1.491Z"
          fill="url(#paint1_linear)"
        />
        <Path
          d="M7.29478 19.1696C7.01923 19.7029 6.46832 20.0372 5.86793 20.0353H1.06883V18.0366C1.06883 17.7415 0.829598 17.5022 0.534416 17.5022C0.239235 17.5022 0 17.7415 0 18.0366V23.0708C0 23.366 0.239235 23.6052 0.534416 23.6052C0.829598 23.6052 1.06883 23.366 1.06883 23.0708V21.1041H5.87315C6.87205 21.106 7.78808 20.549 8.24609 19.6612L11.9229 12.548L10.9716 12.0564L7.29478 19.1696Z"
          fill="url(#paint2_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="24.9526"
          y1="7.41935"
          x2="19.4146"
          y2="11.9914"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="21.7066"
          y1="1.67635"
          x2="10.3779"
          y2="17.9885"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1="11.8037"
          y1="12.2874"
          x2="0.372446"
          y2="23.9697"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {SecurityIcon};
