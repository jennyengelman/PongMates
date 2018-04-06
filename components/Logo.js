import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font } from 'expo';


export default class Logo extends React.Component {
  render() {
    return (
      <View style = {{
        height: '30%',
        flexDirection: 'column',
        marginTop: '10%',
      }}>
        <View style={ [styles.logo, styles.pong] } />
        <View style={ [styles.logo, styles.mates, { marginTop: 30 }] } />
        <View style={ [styles.logo, styles.pong, styles.cover, { marginTop: 7 }] } />
        <View style={ [styles.logo, styles.mates, styles.cover, { marginTop: 37 }] } />
        <View style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            marginTop: 10,
        }}>
          <Text style={ this.props.font ? styles.pongMatesText : styles.pongMatesTextBackup }>
          Pong
          </Text>
          <Text style={ this.props.font ? styles.pongMatesText2 : styles.pongMatesTextBackup2 }>
          Mates
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#FFC928',
    width: '60%',
    height: 110,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 7,
    position: 'absolute',
  },
  pong: {
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'flex-end',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
  },
  mates: {
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    alignSelf: 'flex-end',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
  },
  cover: {
    borderWidth: 0,
    height: 96,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#FFC928',
    shadowOffset: { height: 0, width: 0 },
  },
  pongMatesText: {
    color: 'white',
    fontFamily: 'double-bubble-shadow',
    fontSize: 65,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 0 },
  },
  pongMatesTextBackup: {
    color: 'white',
    fontSize: 65,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 0 },
  },
  pongMatesText2: {
    color: 'white',
    fontFamily: 'double-bubble-shadow',
    fontSize: 65,
    marginTop: 30,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 0 },
  },
  pongMatesTextBackup2: {
    color: 'white',
    fontSize: 65,
    marginTop: 30,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 0 },
  },
});
