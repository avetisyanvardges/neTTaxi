import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Armenian = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.149 18.426a7.334 7.334 0 01-2.902 3.104 10.378 10.378 0 01-5.088 1.456H9.84a10.349 10.349 0 01-5.088-1.456 7.232 7.232 0 01-2.902-3.104 9.712 9.712 0 01-.919-4.67c.01-1.226.143-2.448.396-3.648.476-1.845 2.02-3.368 2.496-3.747C5.007 5.4 6.52 5 8.034 4.72a5.96 5.96 0 01.429-.061v-.504c-.095-.908-.412-2.013-1.341-2.554 0 0 1.658-.375 2.294.7 0 0 .108-1.53 1.084-2.288 1.088.713 1.088 2.288 1.088 2.288.632-1.075 2.29-.7 2.29-.7-.925.54-1.243 1.646-1.34 2.554v.504h-.085c.226.02.402.04.503.06 1.52.308 3.027.68 4.213 1.642.476.379 2.027 1.902 2.503 3.747.254 1.2.388 2.422.399 3.649a9.861 9.861 0 01-.922 4.669z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={0.918701}
          y1={11.5}
          x2={20.0826}
          y2={11.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Armenian};
