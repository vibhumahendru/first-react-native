import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import FetchLocation from './components/FetchLocation'

export default function App() {

let getLocation = () =>{
  console.log("sup");
}
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.titleText} >app </Text>
      <FetchLocation getLocation={getLocation}/>
    </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleText: {
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
//   baseText: {
//     fontFamily: 'Cochin',
//     marginVertical: 20,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
