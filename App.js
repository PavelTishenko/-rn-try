/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
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
   return (
    <>
      <StatusBar barStyle="dark-content" />    
                  <View style={styles.text_container}>
            {/* In ImageBackground you will need to use style prop 100% */}
            <ImageBackground source={require('./images/water.jpeg')} style={styles.image}>
            <View style={styles.image_container}>
                <Text style={styles.text}>ToDo App</Text>
            </View>
            <AddTodo btnPress={btnPress} setTextValue={setTextValue} textValue={textValue}/>
            </ImageBackground>
          </View>
          <ScrollView>
          <View style={styles.flatContainer}>
            <FlatList
              keyExtractor={(_item, index)=>index.toString()}
              data={textArr}
              renderItem={({item}) => {
                return <ListComponent onFilter={onFilter} txt={item.txt} id={item.id}/>
              }}
              // contentContainerStyle={{flexGrow:1}}
              />             
          </View>
          </ScrollView>       
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
    color: 'black',
    fontWeight: 'bold'
  },
  
  btn:{
   
  },
  flatContainer:{
    backgroundColor: 'teal',
    alignItems:'center'
  },
  image:{
    width: '100%',
    height: '100%'
  },
  image_container:{
    flex: 1, 
    alignItems: 'center'
  }

});

export default App;
