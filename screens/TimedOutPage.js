import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export class TimedOutScreen extends React.Component {
  render() {
    return (
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <Text style = { styles.sorryText }>Sorry...</Text>
        </View>
        <View style = { styles.middleContainer }>
          <Image style = { styles.brokenPong } source = {require('./../assets/broken-pong.png')}/>
        </View>
        <View style = { styles.stripe }>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.timedOutTextBox }>
            <Text style = { styles.timedOutText }>Your request timed out. Please try again later!</Text>
          </View>
          <View style = { styles.homeTextBox }>
            <Button
              onPress = {() => navigate('Selection')}
              title = 'Home'
              color = '#616161'
              fontSize = '30'
              fontFamily = 'Cochin'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    height: '50%',
    backgroundColor: '#F2994A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brokenPong: {
    width: 125,
    height: 125,
  },
  container: {
    height: '100%',
  },
  homeTextBox: {
    backgroundColor: '#FFC928',
    borderRadius: 30,
    height: 50,
    width: 150,
  },
  sorryText: {
    fontFamily: 'Cochin',
    fontSize: 55,
    color: 'black',
  },
  stripe: {
    backgroundColor: '#FFC928',
    height: '2%',
  },
  timedOutText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    padding: 30,
    color: '#616161',
    justifyContent: 'center',
  },
  timedOutTextBox: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 25,
  },
  middleContainer: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 25,
  },
});
