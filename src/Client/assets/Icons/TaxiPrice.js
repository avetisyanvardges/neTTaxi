import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

function TaxiPrice({IconWidth, IconHeight, IconColorStart, IconColorEnd}) {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0)">
        <Path
          d="M10.719 3.031h2.726C12.952 2.537 11.26.846 10.719.308V3.03z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M15.531 6.969H.47A.469.469 0 000 7.437v5.125c0 .26.21.47.469.47H15.53c.259 0 .469-.21.469-.47V7.438a.469.469 0 00-.469-.47zM5.25 8.719h-.781v3.031a.469.469 0 01-.938 0V8.719H2.75a.469.469 0 010-.938h2.5a.469.469 0 010 .938zm4.29 3.47a.469.469 0 01-.604-.274l-.167-.446H7.233l-.17.447a.469.469 0 01-.876-.332c1.365-3.61 1.305-3.452 1.31-3.461a.548.548 0 011.021.012l1.296 3.45a.469.469 0 01-.274.604zm3.71.03a.468.468 0 01-.382-.197L12 10.806l-.869 1.216a.468.468 0 11-.763-.545L11.424 10l-1.056-1.478a.469.469 0 01.763-.544L12 9.194l.868-1.216a.469.469 0 01.763.544L12.576 10l1.055 1.477a.47.47 0 01-.38.742z"
          fill="url(#paint1_linear)"
        />
        <Path
          d="M2.281 15.063c0 .516.42.937.938.937h9.562c.517 0 .938-.42.938-.938V13.97H2.28v1.094z"
          fill="url(#paint2_linear)"
        />
        <Path
          d="M13.719 3.969H10.25a.469.469 0 01-.469-.469V0H3.22C2.702 0 2.28.452 2.28.97V6.03H13.72V3.97zM7 4.969H4.75a.469.469 0 010-.938H7a.469.469 0 010 .938zm0-2H4.75a.469.469 0 010-.938H7a.469.469 0 010 .938z"
          fill="url(#paint3_linear)"
        />
        <Path
          d="M7.587 10.531h.83l-.414-1.1-.416 1.1z"
          fill="url(#paint4_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={10.9623}
          y1={0.948521}
          x2={13.5613}
          y2={1.01389}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={1.4296}
          y1={8.39521}
          x2={16.6254}
          y2={9.40298}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={3.30321}
          y1={14.4467}
          x2={13.9995}
          y2={15.9601}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={3.30321}
          y1={1.41913}
          x2={14.1889}
          y2={1.93787}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1={7.66126}
          y1={9.69004}
          x2={8.45217}
          y2={9.70502}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
        <ClipPath id="clip0">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default TaxiPrice;
