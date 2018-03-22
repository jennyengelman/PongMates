import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, StackNavigator, Font } from 'react-native';
import { HomeScreen } from './Home.js';

// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Selection: { screen: SelectionScreen },
// });
// <View style={styles.removeHeaderOverlap}>
// </View>

export default class App extends React.Component {
  render() {
    return (
      <HomeScreen>
      </HomeScreen>
    )
  }
};
