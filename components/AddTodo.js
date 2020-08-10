import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Button, ThemeProvider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
export const AddTodo = ({btnPress, setTextValue, textValue}) => {
    return (
        <View style={styles.input} >
              <TextInput
                value={textValue} 
                onChangeText={text=>setTextValue(text)}
                placeholder="Type here your data"/>      
                <Button  
                    onPress={btnPress} title="Add New"
                    type="solid"
                    icon={
                        <Icon name='done' size={20} color='white'/>
                    }
                    />
                
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