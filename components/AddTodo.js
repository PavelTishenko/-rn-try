import React from 'react'
import { View, Button, StyleSheet, TextInput } from 'react-native'

export const AddTodo = ({btnPress, setTextValue, textValue}) => {
    return (
        <View style={styles.input} >
              <TextInput
                value={textValue} 
                onChangeText={text=>setTextValue(text)}
                placeholder="Type here your data"/>
                <Button  onPress={btnPress} title="Submit"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 5,
        marginTop: 8
      },
})