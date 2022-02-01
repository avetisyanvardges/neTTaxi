import React from 'react'
import {Text} from 'react-native'
import i18n from './assets/I18n';

const Translation = ({label})=>{
    return (
        <Text>{i18n.t(label)}</Text>
    )
};

export default Translation;