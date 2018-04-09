import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class NoGamesFoundScreen extends React.Component {
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
          <Text style = { this.state.fontLoaded ? styles.sorryText : styles.sorryTextElse }>Sorry...</Text>
          <Image style = { styles.cup } source = {require('./../assets/images/spilledcup.png')}/>
        </View>
        <View style = { styles.yellowStrip }>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.details }>
            <Text style = { this.state.fontLoaded ? styles.detailsText : styles.detailsTextElse }>No games found. Try again later or adjust your search filter.</Text>
          </View>
          <View style = { styles.buttonContainer }>
            <View style = { styles.button }>
              <Text style = { this.state.fontLoaded ? styles.buttonText : styles.buttonTextElse }>Home</Text>
            </View>
            <View style = { styles.button }>
              <Text style = { this.state.fontLoaded ? styles.buttonText : styles.buttonTextElse }>Change Filter</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    bottomContainer: {
      backgroundColor: '#93E1FA',
      alignItems: 'center',
      flex: 1,
      paddingTop: 25,
    },
    button: {
      backgroundColor: '#FFC928',
      justifyContent: 'center',
      borderRadius: 20,
      height: 75,
      width: 155,
      marginLeft: 22,
      marginRight: 22,
    },
    buttonContainer: {
      flexDirection: 'row',
      paddingTop: 30,
    },
    buttonText: {
      textAlign: 'center',
      fontFamily: 'source-sans-pro',
      color: '#4F4F4F',
      fontSize: 25,
    },
    buttonTextElse: {
      textAlign: 'center',
      color: '#4F4F4F',
      fontSize: 25,
    },
    container: {
      flex: 2,
    },
    cup: {
      width: 200,
      height: 125,
      marginBottom: 30,
    },
    details: {
      borderRadius: 20,
      backgroundColor: 'white',
      width: '75%',
      height: 175,
      justifyContent: 'space-around',
    },
    detailsText: {
      fontSize: 30,
      color: '#4F4F4F',
      fontFamily: 'source-sans-pro',
      textAlign: 'center',
    },
    detailsTextElse: {
      fontSize: 30,
      color: '#4F4F4F',
      textAlign: 'center',
    },
    sorryText: {
      fontFamily: 'source-sans-pro',
      fontSize: 72,
      textAlign: 'center',
      color: '#4F4F4F',
      width: '60%',
    },
    sorryTextElse: {
      fontSize: 72,
      textAlign: 'center',
      color: '#4F4F4F',
    },
    topContainer: {
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1,
    },
    yellowStrip: {
      backgroundColor: '#FFC928',
      height: '1.5%',
    },
  });
