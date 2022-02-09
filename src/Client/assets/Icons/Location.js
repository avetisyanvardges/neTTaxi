import React from 'react';
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg';

const Location = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.728 6.488A6.727 6.727 0 0113.5 4.5c1.789 0 3.506.714 4.772 1.988a6.815 6.815 0 011.978 4.805c0 3.109-1.724 5.922-3.519 8A23.29 23.29 0 0113.5 22.36a23.29 23.29 0 01-3.231-3.068c-1.796-2.077-3.519-4.89-3.519-7.999 0-1.802.712-3.53 1.978-4.805zm4.448 17.034l.324-.46.324.46a.564.564 0 01-.648 0zm0 0l.324-.46.324.46.002-.001.006-.004.017-.013.066-.048a20.667 20.667 0 001.093-.874c.92-.786 1.78-1.64 2.573-2.554 1.861-2.152 3.794-5.224 3.794-8.735 0-2.098-.83-4.112-2.305-5.597a7.854 7.854 0 00-5.57-2.321 7.854 7.854 0 00-5.57 2.32 7.94 7.94 0 00-2.305 5.598c0 3.511 1.933 6.583 3.793 8.735a24.418 24.418 0 003.425 3.246c.101.078.204.155.308.23l.018.013.005.004.002.001zM11.25 11.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zm2.25-3.375a3.375 3.375 0 100 6.75 3.375 3.375 0 000-6.75z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={7.03222}
          y1={8.13958}
          x2={22.0508}
          y2={8.43312}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Location};
