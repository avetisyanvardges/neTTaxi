import React from 'react'
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg'

const RandomAddress = ({IconWidth, IconHeight, IconColorStart,IconColorEnd}) => {
  return (
<Svg width={IconWidth} height={IconHeight} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M17.1143 4.74287L13.3428 8.51429H16.1714C16.1714 11.6352 13.6351 14.1714 10.5143 14.1714C9.59304 14.1746 8.68561 13.9477 7.87425 13.5114L6.49768 14.888C7.69802 15.652 9.09142 16.0575 10.5143 16.0572C14.6817 16.0572 18.0571 12.6817 18.0571 8.51429H20.8857L17.1143 4.74287ZM4.85711 8.51429C4.85711 5.39344 7.39339 2.85715 10.5143 2.85715C11.4665 2.85715 12.3717 3.09286 13.1543 3.51715L14.5308 2.14058C13.3305 1.37663 11.9371 0.97104 10.5143 0.971436C6.34682 0.971436 2.97139 4.34686 2.97139 8.51429H0.142822L3.91425 12.2857L7.68568 8.51429H4.85711Z" fill="url(#paint0_linear)"/>
<Defs>
<LinearGradient id="paint0_linear" x1="1.99614" y1="4.52101" x2="21.7597" y2="5.20389" gradientUnits="userSpaceOnUse">
<Stop stopColor={IconColorStart}/>
<Stop offset="1" stopColor={IconColorEnd}/>
</LinearGradient>
</Defs>
</Svg>


  )
}
export {RandomAddress}