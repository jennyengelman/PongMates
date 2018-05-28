import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animate.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.view style={{ opacity: fadeAnim }}/>
    );
  }
}
