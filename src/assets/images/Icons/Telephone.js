import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Telephone = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.097 15.512a.711.711 0 00-.352-.527l-2.93-1.903-.024-.015a.894.894 0 00-.403-.113.935.935 0 00-.67.235l-.927.85a.52.52 0 01-.203.08c-.01 0-1.03-.119-2.83-2.084-1.798-1.96-1.833-2.99-1.833-2.99a.474.474 0 01.098-.21l.79-.723a.967.967 0 00.234-1.046L7.513 3.848a.692.692 0 00-.602-.432.713.713 0 00-.513.195L4.245 5.58a1.582 1.582 0 00-.441.8c-.024.131-.528 3.275 3.616 7.797 3.518 3.838 6.373 4.249 7.165 4.283.096.006.193.005.29-.002.277-.025.628-.18.833-.368l2.152-1.972a.711.711 0 00.237-.606z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={5.08559}
          y1={6.79786}
          x2={19.0708}
          y2={7.75989}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Telephone};
