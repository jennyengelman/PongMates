import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Congrats } from './Congrats';
import { About } from './About';
import PongButton from './PongButton';



export default class App extends React.Component {
  render() {
    return (
      <About/>
    )
  }
};
