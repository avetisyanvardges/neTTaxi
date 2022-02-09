import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const ArrowLeftIcon = ({
  IconWidth,
  IconHeight,
  IconColorStart,
  IconColorEnd,
}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 13 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.662 1.68657C13.1315 1.28507 13.1092 0.652173 12.612 0.272973C12.1148 -0.106227 11.3313 -0.0881261 10.8618 0.313374L0.337975 9.31338C-0.112606 9.69868 -0.112711 10.3012 0.337975 10.6866L10.8618 19.688C11.3313 20.0896 12.1148 20.1077 12.6119 19.7285C13.109 19.3493 13.1316 18.7164 12.6621 18.3149L2.94097 10.0001L12.662 1.68657Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0"
          y1="10.0007"
          x2="13"
          y2="10.0007"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {ArrowLeftIcon};
