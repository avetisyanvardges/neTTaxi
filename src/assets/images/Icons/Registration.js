import React from 'react';
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg';

const Registration = ({
  IconWidth,
  IconHeight,
  IconColorStart,
  IconColorEnd,
}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.745 10.73c-1.967-.717-2.596-1.321-2.596-2.616 0-.778.645-1.281.864-1.947.22-.666.347-1.455.453-2.028.105-.574.147-.796.205-1.407C10.74 1.969 10.23 0 7.5 0 4.77 0 4.258 1.97 4.33 2.732c.058.611.1.833.205 1.407.106.573.231 1.362.45 2.028.22.666.866 1.17.866 1.947 0 1.295-.629 1.9-2.596 2.616C1.281 11.448 0 12.156 0 12.656V15h15v-2.344c0-.5-1.282-1.207-3.255-1.926z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={1.34021}
          y1={3.52941}
          x2={15.64}
          y2={3.88875}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Registration};
