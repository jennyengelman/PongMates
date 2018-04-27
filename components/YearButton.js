import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export function renderYearButton(buttonList, buttonName, buttonPressed) {
  return (
    <View style = {{ flexDirection: 'row', width: '13%' }}>
      <TouchableOpacity
          //onPress={() => { this.state.pressed.21 = !this.state.pressed.21 }}
        style = { buttonPressed ? styles.yearButtons : styles.yearButtonsUn }
      >
        <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
}
{/*{this.props.year}
  export default class YearButton extends React.Component {
  render() {
    return (
      <View style = {{ flexDirection: 'row', width: '13%' }}>
        <TouchableOpacity
          //onPress={() => { this.state.pressed.21 = !this.state.pressed.21 }}
          style = { styles.yearButtons }
        >
          <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>{this.props.year}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}*/}
//make function called renderYearButton, run within creategamepage (function, with data will render)
//can control which specific button is pressed to highlight

const styles = StyleSheet.create({
  optionsTimeText: {
    fontSize: Dimensions.get('window').height / 25,
    fontFamily: 'source-sans-pro',
    color: '#545454',
    textAlign: 'center',
  },
  optionsTimeTextElse: {
    fontSize: 30,
    color: '#545454',
    textAlign: 'center',
  },
  yearButtons: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    width: '170%',
    height: 40,
    marginRight: 10,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  yearButtonsUn: {
    borderColor: '#545454',
    borderWidth: 5,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    width: '170%',
    height: 40,
    marginRight: 10,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
});
