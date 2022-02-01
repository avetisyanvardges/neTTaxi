import React from 'react';
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg';

const DefaultUser = ({IconWidth, IconHeight, IconColor}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.923 20.029c-3.67-1.337-4.845-2.466-4.845-4.884 0-1.45 1.203-2.39 1.613-3.634.41-1.243.648-2.715.845-3.786.197-1.07.275-1.485.383-2.625C20.049 3.676 19.097 0 14 0 8.905 0 7.949 3.676 8.083 5.1c.107 1.14.186 1.555.383 2.625.196 1.071.431 2.543.841 3.786.41 1.244 1.614 2.184 1.614 3.634 0 2.418-1.173 3.547-4.844 4.884C2.392 21.369 0 22.69 0 23.625V28h28v-4.375c0-.932-2.393-2.254-6.077-3.596z"
        fill={IconColor}
        fillOpacity={0.47}
      />
    </Svg>
  );
};

export {DefaultUser};
