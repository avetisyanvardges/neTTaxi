import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Question = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.5 0C3.364 0 0 3.364 0 7.5S3.364 15 7.5 15 15 11.636 15 7.5 11.636 0 7.5 0zm0 11.875a.625.625 0 110-1.25.625.625 0 010 1.25zm.99-3.974a.628.628 0 00-.365.568v.281a.625.625 0 11-1.25 0v-.28c0-.73.429-1.399 1.09-1.704.638-.293 1.097-1.072 1.097-1.454 0-.86-.7-1.562-1.562-1.562-.862 0-1.562.701-1.562 1.562a.625.625 0 11-1.25 0A2.816 2.816 0 017.5 2.5a2.816 2.816 0 012.813 2.812c0 .845-.733 2.086-1.824 2.59z"
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
export {Question};
