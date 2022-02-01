import React from 'react';
import {Svg, Path} from 'react-native-svg';

const Camera = ({IconWidth, IconHeight, IconColor}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill={IconColor} />
      <Path
        d="M13.333 2.667H11.22l-.827-.9a1.326 1.326 0 00-.98-.434H6.587c-.374 0-.734.16-.987.434l-.82.9H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zM8 11.333a3.335 3.335 0 010-6.666 3.335 3.335 0 010 6.666z"
        fill={IconColor}
      />
    </Svg>
  );
};

export {Camera};
