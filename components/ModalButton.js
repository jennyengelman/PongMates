import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';

export default class ModalButton extends React.Component {
  render() {
    return (
      <View style={styles.button}>
        <Text style = { styles.modalButtonStyle }>Continue</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F2994A',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  modalButtonStyle: {
    fontSize: 20,
    fontFamily: 'source-sans-pro',
  },
});
