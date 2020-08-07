import * as React from 'react'
import { Text } from 'react-native'

export const ListComponent = ({title}) => {
    console.log(title[0].txt);
return <Text>{title[0].txt}</Text>
     
}

