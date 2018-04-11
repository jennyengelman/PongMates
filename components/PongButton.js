import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';


export default class PongButton extends React.Component {
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
    margin: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'source-sans-pro',
    fontSize: Dimensions.get('window').height / 40,
    textAlign: 'center'
  }
});
