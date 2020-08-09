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
import {AddTodo} from './components/AddTodo'
const App = () => {
  const [textArr, setTextArr] = useState([{txt: 'One more', id:Math.floor(Math.random() * 10)}])
  const [textValue, setTextValue] = useState('')
  
  const btnPress = () => {
    const newTextArr = 
      {
        id: Math.floor(Math.random() * 10),
        txt: textValue
      }
       
      setTextArr(prev => [...prev, newTextArr])
      setTextValue('')
  }

  const onFilter = (id) => {
    setTextArr(prev=>prev.filter(el=>el.id !== id))
  }
 console.log(textArr);
   return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <ScrollView> */}
          <View style={styles.text_container}>
            <View style={{flex: 1}}>
              <Text style={styles.text}>Lesson number one</Text>
            </View>
            <AddTodo btnPress={btnPress} setTextValue={setTextValue} textValue={textValue}/>
          </View>
          <View style={styles.flatContainer}>
            <FlatList
              keyExtractor={(_item, index)=>index.toString()}
              data={textArr}
              renderItem={({item}) => {
                
                return <ListComponent onFilter={onFilter} txt={item.txt} id={item.id}/>
              }}
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
    // flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'black'
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  
  btn:{
   
  },
  flatContainer:{
    height: 200,
    backgroundColor: 'purple',
    alignItems:'center'
  }

});

export default App;
