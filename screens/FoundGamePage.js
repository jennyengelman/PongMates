import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {
  state = {
    fontLoaded: false,
   };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
     });
    this.setState({ fontLoaded: true }) ;
  }
  render() {
    return (
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <Text style = { this.state.fontLoaded ? styles.match : styles.matchElse }>Its a Match!</Text>
          <Image style = { styles.cup } source = {require('./../assets/cup.png')}/>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.yellowStrip }>
          </View>

        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    bottomContainer: {
      backgroundColor: '#93E1FA',
    },
    container: {
      flex: 2,
    },
    cup: {
      width: 125,
      height: 125,
    },
    match: {
      fontFamily: 'source-sans-pro',
      fontSize: 72,
      fontAlign: 'center',
    },
    matchElse: {
      fontSize: 72,
      fontAlign: 'center',
    },
    topContainer: {
      backgroundColor: 'white',
      justifyContent: 'space-around',
    },
    yellowStrip: {
      backgroundColor: '#FFC928',
      height: '4%',
    },
  });
