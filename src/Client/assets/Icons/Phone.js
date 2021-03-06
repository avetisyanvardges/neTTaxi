import React from 'react';
import {
  Svg,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const Phone = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0)">
        <Path
          d="M6.754 3.697c.35.355.53.775.52 1.216-.012.437-.211.851-.58 1.2L5.546 7.209c.047.093.09.187.135.277.06.13.118.252.179.357.64 1.069 1.486 2.047 2.589 2.994.55.458 1.014.77 1.488.998.274-.284.559-.547.832-.803.102-.097.208-.194.31-.29.766-.727 1.732-.702 2.459.064l.945.995c.107.113.218.23.329.34.214.218.436.448.643.685.332.353.503.77.491 1.204-.01.433-.203.848-.553 1.194l-.008.007-1.25 1.177a2.6 2.6 0 01-1.673.727c-1.04.059-1.998-.272-2.624-.523-1.538-.616-2.955-1.514-4.463-2.837A16.728 16.728 0 011.16 8.092c-.366-.827-.796-1.93-.843-3.15a4.865 4.865 0 010-.225c.02-.82.334-1.502.934-2.027.007-.004.01-.01.018-.014.229-.179.437-.387.66-.605.15-.149.306-.301.47-.45.375-.342.806-.516 1.243-.504.441.011.859.21 1.205.579l1.907 2.001zm-3.709-1.37c0 .004-.003.004 0 0-.152.135-.291.274-.444.423a9.348 9.348 0 01-.729.667c-.393.35-.585.767-.6 1.322-.001.053-.003.11 0 .163.04 1.057.426 2.049.759 2.793A15.79 15.79 0 006 13.047c1.43 1.25 2.758 2.096 4.194 2.67.876.353 1.563.492 2.214.456a1.632 1.632 0 001.068-.463l1.244-1.18c.168-.17.261-.352.266-.534.006-.223-.124-.408-.235-.525l-.01-.01a18.001 18.001 0 00-.62-.657c-.11-.113-.221-.23-.336-.347l-.944-.995c-.367-.386-.716-.395-1.102-.029-.106.1-.211.198-.313.298-.314.29-.606.567-.89.87-.008.006-.012.013-.02.017-.313.297-.61.233-.81.163l-.032-.011c-.605-.268-1.171-.639-1.843-1.197l-.003-.003c-1.183-1.013-2.098-2.071-2.79-3.23-.088-.149-.158-.3-.226-.444-.06-.13-.118-.252-.179-.357l-.024-.043a.77.77 0 01-.08-.354.76.76 0 01.26-.534l1.247-1.183c.124-.118.274-.306.28-.53.006-.22-.128-.405-.246-.518l-.007-.008L4.158 2.36c-.353-.375-.726-.385-1.113-.032z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M13.069 8.072a4.507 4.507 0 00-1.209-2.485 4.53 4.53 0 00-2.418-1.336.477.477 0 01-.386-.483.48.48 0 01.574-.462 5.482 5.482 0 012.927 1.617 5.482 5.482 0 011.461 3.007.482.482 0 01-.405.544.475.475 0 01-.544-.402z"
          fill="url(#paint1_linear)"
        />
        <Path
          d="M9.848.265a9.02 9.02 0 014.82 2.661 9.019 9.019 0 012.406 4.952.478.478 0 11-.95.132 8.077 8.077 0 00-2.149-4.426 8.053 8.053 0 00-4.308-2.378.477.477 0 01-.386-.483.47.47 0 01.567-.458z"
          fill="url(#paint2_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={12.1672}
          y1={15.7295}
          x2={12.1833}
          y2={0.665037}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={12.8281}
          y1={8.0077}
          x2={12.8327}
          y2={3.16738}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={15.2075}
          y1={7.67321}
          x2={15.2147}
          y2={0.0569176}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <ClipPath id="clip0">
          <Path
            fill="#fff"
            transform="scale(1 -1) rotate(88.505 17.284 .003)"
            d="M0 0H16.8419V16.8419H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export {Phone};
