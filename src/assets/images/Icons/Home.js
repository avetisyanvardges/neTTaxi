import React from 'react'
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg'

const HomeIcon = ({IconWidth, IconHeight, IconColorStart,IconColorEnd}) => {
  return (
<Svg width={IconWidth} height={IconHeight} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M2.06836 11.4434L9.98853 3.52322C10.1484 3.36344 10.3651 3.27368 10.5911 3.27368C10.8171 3.27368 11.0338 3.36344 11.1936 3.52322L19.1138 11.4434H17.4093V18.2616C17.4093 18.4876 17.3195 18.7044 17.1596 18.8642C16.9998 19.0241 16.783 19.1138 16.557 19.1138H12.2956V13.1479H8.88654V19.1138H4.62518C4.39914 19.1138 4.18236 19.0241 4.02253 18.8642C3.8627 18.7044 3.7729 18.4876 3.7729 18.2616V11.4434H2.06836Z" fill="url(#paint0_linear)"/>
<Defs>
<LinearGradient id="paint0_linear" x1="3.59132" y1="7.00078" x2="19.8395" y2="7.44014" gradientUnits="userSpaceOnUse">
<Stop stopColor={IconColorStart}/>
<Stop offset="1" stopColor={IconColorEnd}/>
</LinearGradient>
</Defs>
</Svg>



  )
}
export {HomeIcon}