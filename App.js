/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ListComponent} from './components/List-component'

const App = () => {
  const [textArr, setTextArr] = useState([{id: Date.now().toString(), txt: 'Hi'}])
  const [textValue, setTextValue] = useState('')
  const btnPress = () => {
    const newTextArr = [
      {
        id: Date.now().toString(),
        txt: textValue
      }
    ]
    if(textValue.trim()){
      setTextArr(prev => [...prev, newTextArr])
    }
    console.log(textArr);
  }
 const renderList = ({item}) => {
  return <ListComponent title={item.txt}/>
 } 
 
   return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <ScrollView> */}
          <View style={styles.text_container}>
            <View>
              <Text style={styles.text}>Lesson number one</Text>
            </View>
            <View style={styles.input} >
              <TextInput 
                onChangeText={text=>setTextValue(text)}
                placeholder="Type here your data"/>
                <Button  onPress={btnPress} title="Submit"/>
            </View>
          </View>
          <View>
            <FlatList
              data={textArr}
              renderItem={renderList}
              keyExtractor={item=>item.id}
              />
          </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  text_container:{
    height: 300,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'black'
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  input:{
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 5,
    marginTop: 8
  },
  btn:{
   
  }

});

export default App;
