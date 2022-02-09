import React from 'react';
import {
  Svg,
  Path,
  G,
  Defs,
  Stop,
  LinearGradient,
  Rect,
  ClipPath,
} from 'react-native-svg';

const ReinforcementsIcon = ({
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
      <G clip-path="url(#clip0)">
        <Path
          d="M0.493291 9.91714H12.7309C12.9636 11.2503 14.1212 12.2229 15.4744 12.2229C16.8275 12.2229 17.9851 11.2503 18.2178 9.91714H24.5068C24.7792 9.91714 25.0001 9.69627 25.0001 9.42385C25.0001 9.15143 24.7792 8.93056 24.5068 8.93056H18.2178C17.9851 7.59761 16.8275 6.62476 15.4744 6.62476C14.1212 6.62476 12.9636 7.59761 12.7309 8.93056H0.493291C0.220873 8.93056 0 9.15143 0 9.42385C0 9.69627 0.220873 9.91714 0.493291 9.91714Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M0.493291 3.75112H6.78203C7.01495 5.08431 8.1723 6.05692 9.52572 6.05692C10.8789 6.05692 12.0363 5.08431 12.2692 3.75112H24.5068C24.7792 3.75112 25.0001 3.53025 25.0001 3.25783C25.0001 2.98541 24.7792 2.76454 24.5068 2.76454H12.2692C12.0363 1.43159 10.8789 0.45874 9.52572 0.45874C8.1723 0.45874 7.01495 1.43159 6.78203 2.76454H0.493291C0.220873 2.76454 0 2.98541 0 3.25783C0 3.53025 0.220873 3.75112 0.493291 3.75112Z"
          fill="url(#paint1_linear)"
        />
        <Path
          d="M0.493291 16.0834H6.78203C7.01495 17.4166 8.1723 18.3892 9.52572 18.3892C10.8789 18.3892 12.0363 17.4166 12.2692 16.0834H24.5068C24.7792 16.0834 25.0001 15.8625 25.0001 15.5901C25.0001 15.3177 24.7792 15.0968 24.5068 15.0968H12.2692C12.0363 13.7639 10.8789 12.791 9.52572 12.791C8.1723 12.791 7.01495 13.7639 6.78203 15.0968H0.493291C0.220873 15.0968 0 15.3177 0 15.5901C0 15.8625 0.220873 16.0834 0.493291 16.0834Z"
          fill="url(#paint2_linear)"
        />
        <Path
          d="M0.493291 22.2497H12.7309C12.9636 23.5828 14.1212 24.5555 15.4744 24.5555C16.8275 24.5555 17.9851 23.5828 18.2178 22.2497H24.5068C24.7792 22.2497 25.0001 22.0288 25.0001 21.7564C25.0001 21.4839 24.7792 21.2631 24.5068 21.2631H18.2178C17.9851 19.9301 16.8275 18.9573 15.4744 18.9573C14.1212 18.9573 12.9636 19.9301 12.7309 21.2631H0.493291C0.220873 21.2631 0 21.4839 0 21.7564C0 22.0288 0.220873 22.2497 0.493291 22.2497Z"
          fill="url(#paint3_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0"
          y1="9.42385"
          x2="25.0001"
          y2="9.42385"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="0"
          y1="3.25783"
          x2="25.0001"
          y2="3.25783"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1="0"
          y1="15.5901"
          x2="25.0001"
          y2="15.5901"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1="0"
          y1="21.7564"
          x2="25.0001"
          y2="21.7564"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <ClipPath id="clip0">
          <Rect width="25" height="25" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export {ReinforcementsIcon};
