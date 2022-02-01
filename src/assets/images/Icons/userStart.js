import React from "react"
import {Svg, Path, Defs, LinearGradient, Stop, Circle,} from 'react-native-svg'

const UserStart = ({IconWidth, IconHeight, IconColorStart,IconColorEnd }) => {
  return (
    <Svg width={IconWidth} height={IconHeight} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="5.96631" cy="5.5" r="4.5" stroke="url(#paint0_linear)" stroke-width="2"/>
    <Defs>
    <LinearGradient id="paint0_linear" x1="1.44913" y1="2.58823" x2="11.9357" y2="2.85175" gradientUnits="userSpaceOnUse">
    <Stop stopColor={IconColorStart}/>
    <Stop offset="1" stopColor={IconColorEnd}/>
    </LinearGradient>
    </Defs>
    </Svg>
    

  )
};
export {UserStart}