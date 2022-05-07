import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Dramapanak = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.725 3.594H6.931A1.767 1.767 0 015.86 4.666v2.443h5.938V4.666a1.766 1.766 0 01-1.072-1.072zM8.867 5.939a.586.586 0 110-1.172.586.586 0 010 1.172z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M4.688 4.18c0-.324.262-.586.585-.586a.586.586 0 00.586-.586c0-.324.263-.586.586-.586h4.766c.324 0 .586.262.586.586 0 .323.262.586.586.586.324 0 .586.262.586.586v2.997c.432.092.83.275 1.172.533V.586A.586.586 0 0013.555 0H4.102a.586.586 0 00-.586.586v6.523h1.171V4.18z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M20 9.453c0-.647-.525-1.172-1.172-1.172h-1.172V6.523c0-.97-.787-1.757-1.758-1.757h-.585v5.859h3.515c.647 0 1.172-.525 1.172-1.172z"
        fill="url(#paint2_linear)"
      />
      <Path
        d="M15.313 18.828h.585c.971 0 1.758-.787 1.758-1.758v-.586h-2.343v2.344z"
        fill="url(#paint3_linear)"
      />
      <Path
        d="M20 11.47a2.316 2.316 0 01-1.172.327h-6.445a1.758 1.758 0 000 3.515h5.86c.97 0 1.757-.787 1.757-1.757V11.47zm-7.618 2.67a.586.586 0 110-1.171.586.586 0 010 1.172z"
        fill="url(#paint4_linear)"
      />
      <Path
        d="M1.172 7.11h1.172V4.765H1.172a1.172 1.172 0 100 2.343z"
        fill="url(#paint5_linear)"
      />
      <Path
        d="M2.93 20h9.453a1.76 1.76 0 001.758-1.758v-1.758h-1.758a2.933 2.933 0 01-2.93-2.93 2.933 2.933 0 012.93-2.929h1.758v-.586a1.76 1.76 0 00-1.758-1.758H1.172c-.429 0-.826-.124-1.172-.326v9.115A2.933 2.933 0 002.93 20z"
        fill="url(#paint6_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={5.85938}
          y1={5.35156}
          x2={11.7969}
          y2={5.35156}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={3.51563}
          y1={3.85513}
          x2={14.1406}
          y2={3.85513}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={15.3125}
          y1={7.69531}
          x2={20}
          y2={7.69531}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={15.3125}
          y1={17.6562}
          x2={17.6563}
          y2={17.6562}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1={10.625}
          y1={13.3917}
          x2={20}
          y2={13.3917}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1={0}
          y1={5.9375}
          x2={2.34375}
          y2={5.9375}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1={0}
          y1={13.9777}
          x2={14.1406}
          y2={13.9777}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {Dramapanak};
