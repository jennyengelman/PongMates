import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, Font } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './screens/Home';
import { CreateScreen } from './screens/CreateGamePage';
import { TimedOutScreen } from './screens/TimedOutPage';
import { FoundAPartner } from './screens/FoundAPartner';
import { AboutScreen } from './screens/About';
import { SelectionScreen } from './screens/SelectionPage';
import { FindScreen } from './screens/FindGamePage';
import { WaitingScreen } from './screens/WaitingPage';
import { FoundScreen } from './screens/FoundGamePage';
import { FoundAPartnerScreen } from './screens/FoundAPartner';
//add something to home page about Dart pong
//edit about page
//get rid of time, add new filter
//make full column
const RootStack = StackNavigator({
  Home: { screen: FindScreen },
  Create: { screen: CreateScreen },
  TimedOut: { screen: TimedOutScreen },
  About: { screen: AboutScreen },
  FoundAPartner: { screen: FoundAPartnerScreen },
  Selection: { screen: SelectionScreen },
  Find: { screen: FindScreen },
  Waiting: { screen: WaitingScreen },
  FoundGame: { screen: FoundScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    )
  }
};
