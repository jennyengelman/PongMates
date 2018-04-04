import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, Font } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './screens/Home';
import { CreateScreen } from './screens/CreateGamePage';
import { TimedOutScreen } from './screens/TimedOutPage';
import { Congrats } from './screens/Congrats';
import { About } from './screens/About';
import { Selection } from './screens/SelectionPage';

const RootStack = StackNavigator({
  /*Home: { screen: HomeScreen },
  Create: { screen: CreateScreen },*/
  TimedOut: { screen: TimedOutScreen },
  /*About: { screen: About },
  Congrats: { screen: Congrats },*/
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
};
