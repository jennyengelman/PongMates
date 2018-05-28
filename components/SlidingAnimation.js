import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class SlidingView extends React.Component {
  state = {
    position: new Animated.Value(this.props.start),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.position,            // The animated value to drive
      {
        toValue: this.props.end,                   // Animate to opacity: 1 (opaque)
        duration: this.props.duration,               // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { position } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={ [this.props.style, { left: position }] }
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
