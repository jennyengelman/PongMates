import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';

export class TimedOutScreen extends React.Component {
  state = {
    fontLoaded: false,
    name: '',
   };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
      'source-sans-pro-bold': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
     });
    this.setState({ fontLoaded: true }) ;
  }
  render() {
    return (
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <Text style = { this.state.fontLoaded ? styles.sorryText : styles.sorryTextElse }>Sorry...</Text>
        </View>
        <View style = { styles.middleContainer }>
          <Image style = { styles.brokenPong } source = {require('./../assets/broken-pong.png')}/>
        </View>
        <View style = { styles.stripe }>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.timedOutTextBox }>
            <Text style = { this.state.fontLoaded ? styles.timedOutText : styles.timedOutTextElse }>Your request timed out. Please try again later!</Text>
          </View>
          <View style = { styles.homeTextBox }>
            <Button
              onPress = {() => navigate('Selection')}
              title = 'Home'
              color = '#616161'
              fontFamily = 'source-sans-pro'
              fontSize = '200'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    height: '50%',
    backgroundColor: '#F2994A',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 20,
  },
  brokenPong: {
    width: 125,
    height: 125,
  },
  container: {
    height: '100%',
  },
  homeTextBox: {
    backgroundColor: '#FFC928',
    borderRadius: 15,
    height: 50,
    width: 150,
    justifyContent: 'center',
  },
  sorryText: {
    fontFamily: 'source-sans-pro-bold',
    fontSize: 55,
    color: 'black',
  },
  sorryTextElse: {
    fontSize: 55,
    color: 'black',
  },
  stripe: {
    backgroundColor: '#FFC928',
    height: '2%',
  },
  timedOutText: {
    fontFamily: 'source-sans-pro',
    fontSize: 30,
    padding: 30,
    color: '#616161',
    justifyContent: 'center',
    textAlign: 'center',
  },
  timedOutTextElse: {
    fontSize: 30,
    padding: 30,
    color: '#616161',
    justifyContent: 'center',
  },
  timedOutTextBox: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 25,
    backgroundColor: 'white',
  },
  middleContainer: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 25,
  },
});
