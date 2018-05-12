import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { Font } from 'expo';

export default class Logo extends React.Component {
  render() {
    return (
      <View style = {{
        height: '30%',
        flexDirection: 'column',
      }}>
        <View style={ [styles.logo, styles.pong, styles.shadow] } />
        <View style={ [styles.logo, styles.mates, styles.shadow, { marginTop: Dimensions.get('window').height / 35 }] } />
        <View style={ [styles.logo, styles.pong, styles.cover, { marginTop: 7 }] } />
        <View style={ [styles.logo, styles.mates, styles.cover, { marginTop: Dimensions.get('window').height / 35 + 7 }] } />
        <View style={{
            height: Dimensions.get('window').width / 4 + Dimensions.get('window').height/70 - 3.5,
            width: '52.25%',
            alignSelf: 'flex-start',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
        }}>
          <Text style={ this.props.font ? styles.pongMatesText : styles.pongMatesTextBackup }>
          Need
          </Text>
        </View>
        <View style={{
            height: Dimensions.get('window').width / 4 + Dimensions.get('window').height/70 - 3.5,
            width: '47.75%',
            alignSelf: 'flex-end',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            marginTop: Dimensions.get('window').height / 35,
        }}>
          <Text style={ this.props.font ? styles.pongMatesText2 : styles.pongMatesTextBackup2 }>
          One
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#FFC928',
    height: Dimensions.get('window').width / 4 + Dimensions.get('window').height/70,
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 7,
    position: 'absolute',
  },
  shadow: {
    shadowOpacity: 0.75,
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
  },
  pong: {
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'flex-end',
    width: '60%',
  },
  mates: {
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    alignSelf: 'flex-end',
    width: '55%',
  },
  cover: {
    borderWidth: 0,
    height: Dimensions.get('window').width / 4 + Dimensions.get('window').height/70 - 14,
  },
  pongMatesText: {
    color: '#FFFFFF',
    fontFamily: 'double-bubble-shadow',
    fontSize: Dimensions.get('window').width / 4.8,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 3, width: 0 },
  },
  pongMatesTextBackup: {
    color: '#FFFFFF',
    fontSize: Dimensions.get('window').width / 4.8,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 3, width: 0 },
  },
  pongMatesText2: {
    color: '#FFFFFF',
    fontFamily: 'double-bubble-shadow',
    fontSize: Dimensions.get('window').width / 4.8,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 3, width: 0 },
  },
  pongMatesTextBackup2: {
    color: '#FFFFFF',
    fontSize: Dimensions.get('window').width / 4.8,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 3, width: 0 },
  },
});
