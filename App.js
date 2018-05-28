import React from 'react';
import * as firebaseConfig from './services/firebase-config'
import * as user from './services/user-actions'
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
import { Actions } from './services/automated-actions';
import { NoGamesFoundScreen } from './screens/NoGamesFoundPage';
import { CancelScreen } from './screens/CancelledPage';
import { WaitingFindScreen } from './screens/WaitingFindPage';
import { MeetMatch } from './screens/MeetYourMatch';

const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  Create: { screen: CreateScreen },
  Find: { screen: FindScreen },
  TimedOut: { screen: TimedOutScreen },
  About: { screen: AboutScreen },
  FoundAPartner: { screen: FoundAPartnerScreen },
  Selection: { screen: SelectionScreen },
  Find: { screen: FindScreen },
  Waiting: { screen: WaitingScreen },
  WaitingFind: { screen: WaitingFindScreen },
  FoundGame: { screen: FoundScreen },
  NoGamesFound: { screen: NoGamesFoundScreen },
  Cancel: { screen: CancelScreen },
  MeetYourMatch: { screen: MeetMatch }
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    )
  }
};
