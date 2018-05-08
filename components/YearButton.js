import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class YearButton extends React.Component {
  render() {
    return(
      
    )
  }
}


const styles = StyleSheet.create({
  yearButtons: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.75,
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowColor: '#444444',
    shadowOffset: { height: 0, width: 0 },
  },
  yearButtonsPressed: {
    borderColor: '#C2515B',
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.75,
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowColor: '#444444',
    shadowOffset: { height: 0, width: 0 },
  },
});
