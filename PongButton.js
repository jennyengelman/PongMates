import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';


export default class PongButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={ this._onPressButton }>
        <View style={ styles.button }>
        {
          this.props.font ? (
            <Text style={ styles.buttonText }>{ this.props.text }</Text>
          ) :
          <Text style={ styles.buttonTextBackup }>{ this.props.text }</Text>
        }
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').height/10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC928',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'source-sans-pro',
    fontSize: Dimensions.get('window').height/25,
  }
});
