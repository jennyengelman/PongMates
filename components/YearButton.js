import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class YearButton extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={ () => navigate(this.props.destination) }
        style={ styles.button }
      >
        <Text style={ this.props.font ? styles.buttonText : styles.buttonTextBackup }>
        { this.props.text }
        </Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC928',
    alignSelf: 'center',
    marginTop: Dimensions.get('window').width / 20,
  },
  buttonText: {
    color: '#616161',
    fontFamily: 'source-sans-pro-bold',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height / 30,
  },
  buttonTextBackup: {
    color: '#616161',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height / 30,
  },
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
});
