import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Congrats } from './Congrats';
import { About } from './About';
import PongButton from './PongButton';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  About: { screen: About},
  Congrats: { screen: Congrats},
});

export default App;
