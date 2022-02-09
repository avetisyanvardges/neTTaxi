import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const SettingsIcon = ({
  IconWidth,
  IconHeight,
  IconColorStart,
  IconColorEnd,
}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.9656 10.3447H16.8967V11.3791L17.9311 14.4824V18.9649C17.9311 19.5362 18.3943 19.9993 18.9656 19.9993C19.5369 19.9993 20 19.5362 20 18.9649V14.4824L18.9656 11.3791V10.3447Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M13.4487 10.3447H15.5175V11.3791L14.4831 14.4824V18.9649C14.4831 19.5362 14.02 19.9993 13.4487 19.9993C12.8774 19.9993 12.4143 19.5362 12.4143 18.9649V14.4824L13.4487 11.3791V10.3447Z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M14.5055 7.42137L15.5175 6.20697H16.2071C16.7784 6.20697 17.2415 5.74385 17.2415 5.17256C17.2415 4.60126 16.7784 4.13814 16.2071 4.13814V0.000488281H16.8967L18.6207 3.44853V5.86217C18.618 7.00364 17.6934 7.92832 16.5519 7.93099H15.8623L15.1727 8.96541V10.3446H13.7935V8.2758L14.5055 7.42137Z"
        fill="url(#paint2_linear)"
      />
      <Path
        d="M17.9087 7.42137L16.8967 6.20697H16.2071C15.6358 6.20697 15.1727 5.74385 15.1727 5.17256C15.1727 4.60126 15.6358 4.13814 16.2071 4.13814V0.000488281H15.5175L13.7935 3.44853V5.86217C13.7961 7.00364 14.7208 7.92832 15.8623 7.93099H16.5519L17.2415 8.96541V10.3446H18.6207V8.2758L17.9087 7.42137Z"
        fill="url(#paint3_linear)"
      />
      <Path
        d="M7.70749 1.37988C7.62832 1.6012 7.58759 1.83442 7.58716 2.06949V7.58636H7.93196C8.31284 7.58636 8.62157 7.89509 8.62157 8.27597C8.62157 8.65685 8.31284 8.96558 7.93196 8.96558H7.58716V10.3448H11.7248V8.96558H11.38C10.9991 8.96558 10.6904 8.65685 10.6904 8.27597C10.6904 7.89509 10.9991 7.58636 11.38 7.58636H11.7248V2.06949C11.7244 1.83442 11.6837 1.6012 11.6045 1.37988H7.70749Z"
        fill="url(#paint4_linear)"
      />
      <Path
        d="M11.38 7.58636H11.7248V2.06949C11.7244 1.83442 11.6837 1.6012 11.6045 1.37988H11.3252C10.8045 4.17832 9.65599 5.86234 7.83645 7.58636H7.93196C8.31284 7.58636 8.62157 7.89509 8.62157 8.27597C8.62157 8.65685 8.31284 8.96558 7.93196 8.96558H7.58716V10.3448H11.7248V8.96558H11.38C10.9991 8.96558 10.6904 8.65685 10.6904 8.27597C10.6904 7.89509 10.9992 7.58636 11.38 7.58636Z"
        fill="url(#paint5_linear)"
      />
      <Path
        d="M9.31104 2.41431H10.0006V7.24158H9.31104V2.41431Z"
        fill="url(#paint6_linear)"
      />
      <Path
        d="M10.3453 19.9993H8.96614L8.62134 18.2752L8.96614 17.2408V10.3447H10.3453V17.2408L10.6902 18.2752L10.3453 19.9993Z"
        fill="url(#paint7_linear)"
      />
      <Path
        d="M9.65577 0.000488281C8.77979 0.00135029 7.99928 0.553813 7.70728 1.3797H11.6036C11.3117 0.554028 10.5315 0.00160889 9.65577 0.000488281Z"
        fill="url(#paint8_linear)"
      />
      <Path
        d="M4.48379 14.0654V5.75217C6.03101 4.97166 6.65252 3.08472 5.87206 1.5375C5.51157 0.822847 4.89156 0.273013 4.13899 0.000488281V2.94995H2.07016V0.000488281C0.440827 0.590535 -0.401702 2.38973 0.188344 4.0191C0.460869 4.77168 1.01075 5.39168 1.72535 5.75217V14.0654C0.179379 14.8445 -0.442346 16.7293 0.336697 18.2753C0.864334 19.3223 1.93215 19.9874 3.10457 19.9992C4.83571 19.9818 6.22497 18.5644 6.20764 16.8333C6.19592 15.6609 5.53083 14.593 4.48379 14.0654ZM3.79418 18.2751H2.41496L1.38055 16.8959L2.41496 15.5167H3.79418L4.82859 16.8959L3.79418 18.2751Z"
        fill="url(#paint9_linear)"
      />
      <Path
        d="M4.48383 14.0655V8.21313L1.72539 11.3478V14.0655C0.179417 14.8445 -0.442309 16.7294 0.336734 18.2754C0.864371 19.3224 1.93219 19.9875 3.10461 19.9992C4.83574 19.9819 6.225 18.5645 6.20768 16.8334C6.19595 15.661 5.53087 14.5931 4.48383 14.0655ZM3.79422 18.2752H2.415L1.38059 16.896L2.415 15.5168H3.79422L4.82863 16.896L3.79422 18.2752Z"
        fill="url(#paint10_linear)"
      />
      <Path
        d="M2.75977 5.8623H3.44937V14.1376H2.75977V5.8623Z"
        fill="url(#paint11_linear)"
      />
      <Path
        d="M8.96631 10.3447H10.3455V11.3791H8.96631V10.3447Z"
        fill="url(#paint12_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="16.8967"
          y1="15.172"
          x2="20"
          y2="15.172"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="12.4143"
          y1="15.172"
          x2="15.5175"
          y2="15.172"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1="13.7935"
          y1="5.17256"
          x2="18.6207"
          y2="5.17256"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1="13.7935"
          y1="5.17256"
          x2="18.6207"
          y2="5.17256"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1="7.58716"
          y1="5.86234"
          x2="11.7248"
          y2="5.86234"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1="7.58716"
          y1="5.86234"
          x2="11.7248"
          y2="5.86234"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1="9.31104"
          y1="4.82794"
          x2="10.0006"
          y2="4.82794"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear"
          x1="8.62134"
          y1="15.172"
          x2="10.6902"
          y2="15.172"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear"
          x1="7.70728"
          y1="0.690096"
          x2="11.6036"
          y2="0.690096"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear"
          x1="0"
          y1="9.99982"
          x2="6.20899"
          y2="9.99982"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear"
          x1="0.000732422"
          y1="14.1062"
          x2="6.20784"
          y2="14.1062"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear"
          x1="2.75977"
          y1="9.99995"
          x2="3.44937"
          y2="9.99995"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint12_linear"
          x1="8.96631"
          y1="10.8619"
          x2="10.3455"
          y2="10.8619"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {SettingsIcon};
