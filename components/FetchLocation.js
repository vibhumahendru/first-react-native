import React from 'react';
import {Button} from 'react-native'

const FetchLocation = props =>{
  return (
    <Button title='get location bruv' onPress={props.getLocation} />
  )
}

export default FetchLocation
