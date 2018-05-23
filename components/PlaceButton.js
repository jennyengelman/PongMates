import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';

export default class YearButton extends React.Component {
  render() {
    return(
      <View style = { this.props.pressed ? styles.placeButtonsPressed : styles.placeButtons }>
        <Text style = { this.props.font ? styles.optionsPlaceText : styles.optionsPlaceTextElse }>{ this.props.title }</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  optionsPlaceText: {
    fontSize: Dimensions.get('window').height / 35,
    fontFamily: 'source-sans-pro-semibold',
    color: '#545454',
    textAlign: 'center',
  },
  optionsPlaceTextElse: {
    fontSize: 18,
    color: '#545454',
    textAlign: 'center',
  },
  placeButtons: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.75,
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    marginBottom: 7,
  },
  placeButtonsPressed: {
    borderColor: '#C2515B',
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.75,
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    marginBottom: 7,
  },
});
