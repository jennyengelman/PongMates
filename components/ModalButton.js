import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';

export default class ModalButton extends React.Component {
  render() {
    return (
      <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            this.props.action()
            this.setState({ visibleModal: null })
          }}
          style={ styles.button }
        >
          <View style={styles.button}>
            <Text style = { styles.modalButtonStyle }>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.action()
            this.props.navigation.navigate('Selection', { id: this.props.user.id, userObject: this.props.user })
          }}
          style={ styles.button }
        >
          <View style={styles.button}>
            <Text style = { styles.modalButtonStyle }>{ this.props.label }</Text>
          </View>
        </TouchableOpacity>
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
