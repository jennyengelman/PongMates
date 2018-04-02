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
        <View style={[styles.logo, styles.pong]} />
        <View style={[styles.logo, styles.mates, {marginTop: 30}]} />
        <View style={[styles.logo, styles.pong, styles.cover, {marginTop: 7}]} />
        <View style={[styles.logo, styles.mates, styles.cover, {marginTop: 37}]} />
        {
          this.props.font ? (
          <View style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            marginTop: 10,
          }}>
            <Text style={styles.pongMatesText}>
            Pong
            </Text>
            <Text style={[styles.pongMatesText, {marginTop: 30}]}>
            Mates
            </Text>
          </View>
          ) : null
        }
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
  },
  mates: {
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    alignSelf: 'flex-end',
  },
  cover: {
    borderWidth: 0,
    height: 96,
  },
  pongMatesText: {
    color: 'white',
    fontFamily: 'double-bubble-shadow',
    fontSize: 65,
  },
});
