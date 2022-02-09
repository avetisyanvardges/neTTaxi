import React from 'react'
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg'

const ChooseLocation = ({IconWidth, IconHeight, IconColorStart,IconColorEnd}) => {
  return (
    <Svg width={IconWidth} height={IconHeight} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M8.99994 4.72266C6.64145 4.72266 4.72266 6.64145 4.72266 8.99994C4.72266 11.3584 6.64145 13.2772 8.99994 13.2772C11.3584 13.2772 13.2772 11.3584 13.2772 8.99994C13.2772 6.64145 11.3584 4.72266 8.99994 4.72266ZM8.99994 12.2225C7.223 12.2225 5.77734 10.7769 5.77734 8.99994C5.77734 7.223 7.223 5.77734 8.99994 5.77734C10.7769 5.77734 12.2225 7.223 12.2225 8.99994C12.2225 10.7769 10.7769 12.2225 8.99994 12.2225Z" fill="url(#paint0_linear)"/>
<Path d="M8.99998 6.65552C7.70725 6.65552 6.65552 7.70722 6.65552 8.99998C6.65552 10.2927 7.70722 11.3444 8.99998 11.3444C10.2927 11.3444 11.3444 10.2927 11.3444 8.99998C11.3444 7.70722 10.2927 6.65552 8.99998 6.65552Z" fill="url(#paint1_linear)"/>
<Path d="M16.3846 8.47266C16.1255 4.80973 13.1903 1.87446 9.52734 1.61539V0H8.47266V1.61539C4.80973 1.87446 1.87446 4.80973 1.61539 8.47266H0V9.52734H1.61539C1.87446 13.1903 4.80973 16.1255 8.47266 16.3846V18H9.52734V16.3846C13.1903 16.1255 16.1255 13.1903 16.3846 9.52734H18V8.47266H16.3846ZM15.3268 9.52734C15.0723 12.6084 12.6084 15.0723 9.52734 15.3268V14.4767H8.47266V15.3268C5.39163 15.0723 2.92774 12.6084 2.67318 9.52734H3.52329V8.47266H2.67318C2.92774 5.39163 5.39163 2.92774 8.47266 2.67318V3.52329H9.52734V2.67318C12.6084 2.92774 15.0723 5.39163 15.3268 8.47266H14.4767V9.52734H15.3268Z" fill="url(#paint2_linear)"/>
<Defs>
<LinearGradient id="paint0_linear" x1="5.48698" y1="6.73549" x2="13.6422" y2="6.94043" gradientUnits="userSpaceOnUse">
<Stop stopColor={IconColorStart}/>
<Stop offset="1" stopColor={IconColorEnd}/>
</LinearGradient>
<LinearGradient id="paint1_linear" x1="7.07446" y1="7.75879" x2="11.5445" y2="7.87112" gradientUnits="userSpaceOnUse">
<Stop stopColor={IconColorStart}/>
<Stop offset="1" stopColor={IconColorEnd}/>
</LinearGradient>
<LinearGradient id="paint2_linear" x1="1.60825" y1="4.23529" x2="18.768" y2="4.6665" gradientUnits="userSpaceOnUse">
<Stop stopColor={IconColorStart}/>
<Stop offset="1" stopColor={IconColorEnd}/>
</LinearGradient>
</Defs>
</Svg>

  )
}
export {ChooseLocation}