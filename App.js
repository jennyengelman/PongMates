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
};
