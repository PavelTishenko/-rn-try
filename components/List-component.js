import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity,} from 'react-native'
import { Card } from 'react-native-elements'
export const ListComponent = ({txt, id, onFilter}) => {
return (
        <View>
            <Card>
             <TouchableOpacity style={style.btn} onLongPress={()=>onFilter(id)}>
                <Text style={style.txt_todo}>{txt}</Text>
             </TouchableOpacity>
             </Card>
        </View>
    )    
}

const style = StyleSheet.create({
    btn:{
        backgroundColor: 'white',
        width: 180,
        alignItems:'center',
        marginTop: 5
    },
    txt_todo:{
        fontSize: 20
    }
})