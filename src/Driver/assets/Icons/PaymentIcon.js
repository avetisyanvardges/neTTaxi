import React from 'react';
import {Svg, Path, Stop, Defs, LinearGradient} from 'react-native-svg';

const PaymentIcon = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.66675 6.45835C1.66675 5.1927 2.69276 4.16669 3.95841 4.16669H16.0417C17.3074 4.16669 18.3334 5.1927 18.3334 6.45835V7.91669H1.66675V6.45835Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M1.66675 9.16669H18.3334V13.5417C18.3334 14.8074 17.3074 15.8334 16.0418 15.8334H3.95842C2.69276 15.8334 1.66675 14.8074 1.66675 13.5417V9.16669ZM13.1251 12.0834C12.7799 12.0834 12.5001 12.3632 12.5001 12.7084C12.5001 13.0535 12.7799 13.3334 13.1251 13.3334H15.2084C15.5536 13.3334 15.8334 13.0535 15.8334 12.7084C15.8334 12.3632 15.5536 12.0834 15.2084 12.0834H13.1251Z"
        fill="url(#paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="1.66675"
          y1="6.04169"
          x2="18.3334"
          y2="6.04169"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="1.66675"
          y1="12.5"
          x2="18.3334"
          y2="12.5"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {PaymentIcon};
