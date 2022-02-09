import React from 'react';
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg';

const Email = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.682 1.787H1.318c-.203 0-.393.05-.564.132L7.47 8.636 8.976 7.19l5.27-5.27a1.303 1.303 0 00-.564-.133z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M14.868 2.54L9.908 7.5l4.96 4.96c.082-.173.132-.363.132-.566V3.105c0-.202-.05-.392-.132-.564z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M.132 2.54A1.303 1.303 0 000 3.106v8.79c0 .202.05.392.132.564l4.96-4.96-4.96-4.958z"
        fill="url(#paint2_linear)"
      />
      <Path
        d="M9.287 8.121L7.781 9.568a.438.438 0 01-.62 0L5.712 8.121l-4.96 4.96c.172.082.362.132.565.132h12.364c.203 0 .393-.05.564-.132L9.287 8.12z"
        fill="url(#paint3_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={1.95916}
          y1={3.3987}
          x2={14.7991}
          y2={4.03433}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={10.3635}
          y1={4.87453}
          x2={15.2195}
          y2={4.93717}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={0.454908}
          y1={4.8743}
          x2={5.31098}
          y2={4.93694}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={1.95893}
          y1={9.31933}
          x2={14.7735}
          y2={10.1727}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Email};
