import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const ListComponent = ({txt, id, onFilter}) => {
return (
        <View>
             <TouchableOpacity style={style.btn} onLongPress={()=>onFilter(id)}>
                <Text>{txt}{id}</Text>
             </TouchableOpacity>
        </View>
    )    
}

const style = StyleSheet.create({
    btn:{
        backgroundColor: 'white'
    }
})