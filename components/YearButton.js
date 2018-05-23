import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';

export default class YearButton extends React.Component {
  render() {
    return(
      <View style = { this.props.pressed ? styles.yearButtonsPressed : styles.yearButtons }>
        <Text style = { this.props.font ? styles.optionsYearText : styles.optionsYearTextElse }>{ this.props.title }</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  optionsYearText: {
    fontSize: Dimensions.get('window').height / 25,
    fontFamily: 'source-sans-pro',
    color: '#93E1FA',
    textAlign: 'center',
  },
  optionsYearTextElse: {
    fontSize: 30,
    color: '#545454',
    textAlign: 'center',
  },
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
