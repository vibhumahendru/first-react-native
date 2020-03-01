import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FetchLocation from './components/FetchLocation'
import {BUTTON_DATA_ONE, BUTTON_DATA_TWO} from './constants/button_stuff'
import { Button } from 'react-native-elements';



export default function App() {

let countPlus = () =>{
  setCount(count += 1)
  console.log(BUTTON_DATA, "BUTTON_DATA");
}
// <Text style={styles.titleText} >count = {count} </Text>

let [count, setCount] = useState(1)

  return (
    <View style={styles.topContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          {BUTTON_DATA_ONE.map((btn, idx) => {
            return <Button
                    key={idx}
                    title=''
                    onPress={countPlus}
                    buttonStyle={{...styles.button, ...{backgroundColor:btn.color}}}
                  />
          })}

        </View>
        <View style={styles.container}>
          {BUTTON_DATA_TWO.map((btn, idx) => {
            return <Button
                    key={idx}
                    title=''
                    onPress={countPlus}
                    buttonStyle={{...styles.button, ...{backgroundColor:btn.color}}}
                  />
          })}

        </View>
      </View>
      <Text style={styles.text}>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
  mainContainer:{
    flex: 2,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',

  },
  text:{
    flex:1,
    color:'#f35588',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  baseText: {
    fontFamily: 'Cochin',
    marginVertical: 20,
  },
  button:{
    margin:5,
    borderRadius:50,
    width:100,
    height:100,
  }
});
