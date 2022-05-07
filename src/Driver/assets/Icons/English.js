import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const English = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 17 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.742 20.161h.806v-.806h-.806v-8.871h.806v-.807h-.994l-1.613-2.419h-.619v-1.21h1.613L8.903.672V0h-.806v.672L4.064 6.048h1.613v1.21h-.619l-1.613 2.42h-.993v.806h.806v8.87h-.806v.807h.806v4.032H.838V25h15.323v-.806h-2.42V20.16zm-.807 4.032h-.806v-4.032h.806v4.032zm-1.613-13.71v2.16a3.622 3.622 0 00-5.645 0v-2.16h5.646zM8.5 12.098a2.826 2.826 0 012.822 2.822A2.826 2.826 0 018.5 17.742a2.826 2.826 0 01-2.823-2.823A2.826 2.826 0 018.5 12.097zm0 6.451c1.14 0 2.157-.529 2.822-1.353v2.16H5.678v-2.16A3.622 3.622 0 008.5 18.548zm2.822 3.226h-.806v-1.613h.806v1.613zm-4.032 0v-1.613h.807v1.613H7.29zm1.613-1.613h.807v1.613h-.807v-1.613zm-2.42 0v1.613h-.806v-1.613h.807zm-.806 2.42h1.21v1.613h-1.21V22.58zm2.016 0h1.613v1.613H7.693V22.58zm2.42 0h1.21v1.613h-1.21V22.58zm2.822-3.226h-.806v-8.871h.806v8.87zM10.516 7.258H9.71v-1.21h.806v1.21zm-1.613-1.21v1.21h-.806v-1.21h.806zM8.5 1.478l2.822 3.764H5.678L8.5 1.479zm-2.016 4.57h.806v1.21h-.806v-1.21zM5.49 8.065h6.02l1.075 1.612h-1.263v-.806h-.806v.806H9.71v-.806h-.807v.806h-.806v-.806H7.29v.806h-.806v-.806h-.807v.806H4.414L5.49 8.065zm-1.426 2.419h.807v8.87h-.807v-8.87zm0 9.677h.807v4.032h-.807v-4.032z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={0.838623}
          y1={12.5}
          x2={16.1612}
          y2={12.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset={1} stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {English};
