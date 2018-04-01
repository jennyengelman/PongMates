import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default function loadFont() => (
  state = { fontLoaded: false };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/SourceSansPro-Regular.ttf'),
    });
    this.setState({ fontLoaded: true});
  }
)
