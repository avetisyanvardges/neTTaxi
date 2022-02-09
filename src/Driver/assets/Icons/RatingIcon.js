import React from 'react';
import {Svg, Path, Defs, Stop, LinearGradient} from 'react-native-svg';

const RatingIcon = ({IconWidth, IconHeight, IconColorStart, IconColorEnd}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.5 7.01904L15.248 8.46386L14.7231 5.4039L16.9476 3.23601L13.8741 2.78969L12.5 0L11.126 2.78969L8.05249 3.23601L10.277 5.4039L9.75213 8.46386L12.5 7.01904Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M21.784 7.76994L20.4099 4.9856L19.0358 7.76994L15.9639 8.21626L18.1869 10.3836L17.662 13.4441L20.4099 11.9993L23.1593 13.4441L22.6329 10.3836L24.9999 8.21626L21.784 7.76994Z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M2.36702 10.3836L1.84059 13.4441L4.59003 11.9993L7.33795 13.4441L6.81305 10.3836L9.03606 8.21626L5.96409 7.76994L4.59003 4.9856L3.21598 7.76994L0 8.21626L2.36702 10.3836Z"
        fill="url(#paint2_linear)"
      />
      <Path
        d="M16.1621 13.9648C16.1621 11.9457 14.5191 10.3027 12.5 10.3027C10.4809 10.3027 8.83789 11.9457 8.83789 13.9648C8.83789 15.984 10.4809 17.627 12.5 17.627C14.5191 17.627 16.1621 15.984 16.1621 13.9648Z"
        fill="url(#paint3_linear)"
      />
      <Path
        d="M7.37305 22.7539V25H17.627V22.7539C17.627 19.9272 15.3267 17.627 12.5 17.627C9.67331 17.627 7.37305 19.9272 7.37305 22.7539Z"
        fill="url(#paint4_linear)"
      />
      <Path
        d="M23.4864 24.2188C23.4864 22.1996 21.8434 20.5566 19.8243 20.5566C19.4455 20.5566 19.0873 20.631 18.7434 20.7382C18.9507 21.3776 19.0919 22.0465 19.0919 22.7539V25H23.4864V24.2188Z"
        fill="url(#paint5_linear)"
      />
      <Path
        d="M22.7539 17.627C22.7539 16.0112 21.4399 14.6973 19.8242 14.6973C18.2085 14.6973 16.8945 16.0112 16.8945 17.627C16.8945 17.7202 16.9134 17.8083 16.922 17.8993C17.6443 18.5577 18.2268 19.3613 18.601 20.2805C18.9745 20.4535 19.3863 20.5566 19.8242 20.5566C21.4399 20.5566 22.7539 19.2427 22.7539 17.627Z"
        fill="url(#paint6_linear)"
      />
      <Path
        d="M8.078 17.8993C8.08659 17.8083 8.10547 17.7202 8.10547 17.627C8.10547 16.0112 6.7915 14.6973 5.17578 14.6973C3.56007 14.6973 2.24609 16.0112 2.24609 17.627C2.24609 19.2427 3.56007 20.5566 5.17578 20.5566C5.61371 20.5566 6.02551 20.4535 6.39896 20.2806C6.77319 19.3613 7.35569 18.5577 8.078 17.8993Z"
        fill="url(#paint7_linear)"
      />
      <Path
        d="M1.51367 24.2188V25H5.9082V22.7539C5.9082 22.0465 6.04935 21.3776 6.25668 20.7382C5.91278 20.631 5.55458 20.5566 5.17578 20.5566C3.15666 20.5566 1.51367 22.1996 1.51367 24.2188Z"
        fill="url(#paint8_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="8.05249"
          y1="4.23193"
          x2="16.9476"
          y2="4.23193"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="15.9639"
          y1="9.21486"
          x2="24.9999"
          y2="9.21486"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1="0"
          y1="9.21486"
          x2="9.03606"
          y2="9.21486"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1="8.83789"
          y1="13.9648"
          x2="16.1621"
          y2="13.9648"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1="7.37305"
          y1="21.3135"
          x2="17.627"
          y2="21.3135"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1="18.7434"
          y1="22.7783"
          x2="23.4864"
          y2="22.7783"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1="16.8945"
          y1="17.627"
          x2="22.7539"
          y2="17.627"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear"
          x1="2.24609"
          y1="17.627"
          x2="8.10547"
          y2="17.627"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear"
          x1="1.51367"
          y1="22.7783"
          x2="6.25668"
          y2="22.7783"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {RatingIcon};
