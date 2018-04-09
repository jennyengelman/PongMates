import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, Font } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './screens/Home';
import { CreateScreen } from './screens/CreateGamePage';
import { TimedOutScreen } from './screens/TimedOutPage';
import { CongratsScreen } from './screens/Congrats';
import { AboutScreen } from './screens/About';
import { SelectionScreen } from './screens/SelectionPage';
import { FindScreen } from './screens/FindGamePage';
import { WaitingScreen } from './screens/WaitingPage';
import { FoundScreen } from './screens/FoundGamePage';
import { NoGamesFoundScreen } from './screens/NoGamesFoundPage';

const RootStack = StackNavigator({
  Home: { screen: NoGamesFoundScreen },
  Create: { screen: CreateScreen },
  TimedOut: { screen: TimedOutScreen },
  About: { screen: AboutScreen },
  Congrats: { screen: CongratsScreen },
  Selection: { screen: SelectionScreen },
  Find: { screen: FindScreen },
  Waiting: { screen: WaitingScreen },
  FoundGame: { screen: FoundScreen },
  NoGamesFound: { screen: NoGamesFoundScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
};
