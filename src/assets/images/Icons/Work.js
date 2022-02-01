import React from 'react'
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg'

const Work = ({IconWidth, IconHeight, IconColorStart,IconColorEnd}) => {
  return (
<Svg width={IconWidth} height={IconHeight} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M16.5451 5.0906H13.2724V3.45423C13.2724 2.54605 12.5442 1.81787 11.6361 1.81787H8.36333C7.45514 1.81787 6.72696 2.54605 6.72696 3.45423V5.0906H3.45424C2.54605 5.0906 1.82605 5.81878 1.82605 6.72696L1.81787 15.727C1.81787 16.6351 2.54605 17.3633 3.45424 17.3633H16.5451C17.4533 17.3633 18.1815 16.6351 18.1815 15.727V6.72696C18.1815 5.81878 17.4533 5.0906 16.5451 5.0906ZM11.6361 5.0906H8.36333V3.45423H11.6361V5.0906Z" fill="url(#paint0_linear)"/>
<Defs>
<LinearGradient id="paint0_linear" x1="3.27991" y1="5.47562" x2="18.8787" y2="5.88823" gradientUnits="userSpaceOnUse">
<Stop stopColor={IconColorStart}/>
<Stop offset="1" stopColor={IconColorEnd}/>
</LinearGradient>
</Defs>
</Svg>



  )
}
export {Work}