import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class FoundScreen extends React.Component {
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
          <Text style = { this.state.fontLoaded ? styles.matchText : styles.matchTextElse }>It{ `'` }s a Match!</Text>
          <Image style = { styles.cup } source = {require('./../assets/cup.png')}/>
        </View>
        <View style = { styles.yellowStrip }>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.detailsHeader }>
            <Text style = { this.state.fontLoaded ? styles.detailsHeaderText : styles.detailsHeaderTextElse }>Your Game Details</Text>
          </View>
          <View style = { styles.details }>
            <Text style = { this.state.fontLoaded ? styles.detailsText : styles.detailsTextElse }>Partner:</Text>
            <Text style = { this.state.fontLoaded ? styles.detailsText : styles.detailsTextElse }>Place:</Text>
            <Text style = { this.state.fontLoaded ? styles.detailsText : styles.detailsTextElse }>Time:</Text>
          </View>
          <View style = { styles.buttonContainer }>
            <View style = { styles.button }>
              <Text style = { this.state.fontLoaded ? styles.buttonText : styles.buttonTextElse }>Decline</Text>
            </View>
            <View style = { styles.button }>
              <Text style = { this.state.fontLoaded ? styles.buttonText : styles.buttonTextElse }>Let{ `'` }s Go!</Text>
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
      width: 125,
      marginLeft: 20,
      marginRight: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      paddingTop: 30,
    },
    buttonText: {
      textAlign: 'center',
      fontFamily: 'source-sans-pro',
      color: '#4F4F4F',
      fontSize: 30,
    },
    buttonTextElse: {
      textAlign: 'center',
      color: '#4F4F4F',
      fontSize: 30,
    },
    container: {
      flex: 2,
    },
    cup: {
      width: 200,
      height: 125,
    },
    details: {
      borderRadius: 20,
      backgroundColor: 'white',
      width: '75%',
      height: 175,
      justifyContent: 'space-around',
      paddingLeft: 15,
    },
    detailsText: {
      fontSize: 30,
      color: '#4F4F4F',
      fontFamily: 'source-sans-pro',
      textAlign: 'left',
    },
    detailsTextElse: {
      fontSize: 30,
      color: '#4F4F4F',
      textAlign: 'left',
    },
    detailsHeader: {
      backgroundColor: '#FFC928',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      width: '50%',
      height: 40,
      justifyContent: 'center',
    },
    detailsHeaderText: {
      fontFamily: 'source-sans-pro',
      color: '#4F4F4F',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
    detailsHeaderTextElse: {
      color: '#4F4F4F',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
    matchText: {
      fontFamily: 'source-sans-pro',
      fontSize: 72,
      textAlign: 'center',
      color: '#4F4F4F',
      width: '60%',
    },
    matchTextElse: {
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
