import React from 'react';
import {Svg, Path, Stop, Defs, LinearGradient} from 'react-native-svg';

const DollarIcon = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.804 18.463V20H6.331v-1.609C3.964 18.155 1.745 17.255 0 15.822l1.956-2.137c1.22 1.026 2.732 1.74 4.375 2.066v-4.682C2.99 10.3.734 9.244.734 6.41c0-2.593 2.255-4.587 5.597-4.946V0h2.473v1.489c2.122.194 4.119.975 5.707 2.233L12.663 5.93a9.318 9.318 0 00-3.859-1.8v4.513C12.527 9.388 15 10.516 15 13.445c0 2.762-2.255 4.778-6.196 5.018zM6.331 8.067V4.082c-1.33.288-2.174 1.128-2.174 2.064 0 .96.707 1.465 2.174 1.921zm5.272 5.666c0-1.104-.87-1.608-2.799-2.112v4.273c1.848-.192 2.8-1.104 2.8-2.16z"
        fill="#fff"
      />
    </Svg>
  );
};
export {DollarIcon};
