import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class EnlargeSmiley extends React.Component {
  state = {
    scaleValue: new Animated.Value(0),
  }

  /*animations = [
    {
      animation: 'scale',
      enabled: false
    }
  ];*/

  componentDidMount() {
    this.state.scaleValue.setValue(.3)
    Animated.timing(
      this.state.scaleValue,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }

  render() {
    let { scaleValue } = this.state;
    /*const scaler = this.state.scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 7]
    });*/
    return (
      <Animated.Image source = { this.props.picture } style = {[ this.props.styling, this.componentDidMount: scaleValue ]}/>
    );
  }
}
