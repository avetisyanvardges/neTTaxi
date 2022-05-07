import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Plus = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M50 29.167c1.726 0 3.125 1.399 3.125 3.125v14.583h14.583a3.125 3.125 0 010 6.25H53.125v14.583a3.125 3.125 0 01-6.25 0V53.125H32.292a3.125 3.125 0 010-6.25h14.583V32.292c0-1.726 1.4-3.125 3.125-3.125z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M12.5 26.042c0-7.48 6.063-13.542 13.542-13.542h47.916c7.48 0 13.542 6.063 13.542 13.542v47.916c0 7.48-6.063 13.542-13.542 13.542H26.042c-7.48 0-13.542-6.063-13.542-13.542V26.042zm13.542-7.292a7.292 7.292 0 00-7.292 7.292v47.916a7.292 7.292 0 007.292 7.292h47.916a7.292 7.292 0 007.292-7.292V26.042a7.292 7.292 0 00-7.292-7.292H26.042z"
        fill="url(#paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={70.4167}
          y1={29.9999}
          x2={29.1667}
          y2={70.8332}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={86.7499}
          y1={13.9999}
          x2={12.4999}
          y2={87.4999}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Plus};
