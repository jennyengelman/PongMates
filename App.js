import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, Font } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './screens/Home';
import { CreateScreen } from './screens/CreateGamePage';
import { TimedOutScreen } from './screens/TimedOutPage';

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Create: {
    screen: CreateScreen,
  },
  TimedOut: {
    screen: TimedOutScreen,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pongRoundedRectangle: {
    backgroundColor: 'orange',
    width: 220,
    height: 120,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  matesRoundedRectangle: {
    backgroundColor: 'yellow',
    width: 240,
    height: 120,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  pongMatesText: {
    paddingTop: 20,
    padding: 5,
    fontFamily: 'Cochin',
    fontSize: 50,
    alignItems: 'center'
  },
});
