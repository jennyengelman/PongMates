import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import PongButton from './../components/PongButton';

export class TimedOutScreen extends React.Component {
  static navigationOptions = { header: null };
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <Text style = { this.state.fontLoaded ? styles.sorryText : styles.sorryTextElse }>Sorry...</Text>
        </View>
        <View style = { styles.middleContainer }>
          <Image style = { styles.brokenPong } source = {require('./../assets/images/broken-pong.png')}/>
        </View>
        <View style = { styles.stripe }>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.timedOutTextBox }>
            <Text style = { this.state.fontLoaded ? styles.timedOutText : styles.timedOutTextElse }>Your request timed out. Please try again later!</Text>
          </View>
            <PongButton
              font={ this.state.fontLoaded }
              text={ 'Home' }
              navigation={ this.props.navigation }
              destination={ 'Selection' }
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    height: '43%',
    borderTopWidth: 10,
    borderColor: '#FFC928',
    backgroundColor: '#F2994A',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: Dimensions.get('window').height / 25,
  },
  brokenPong: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
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
    fontSize: Dimensions.get('window').height / 14,
    color: '#000000',
  },
  sorryTextElse: {
    fontSize: Dimensions.get('window').height / 14,
    color: '#000000',
  },
  stripe: {
    backgroundColor: '#FFC928',
    height: '2%',
  },
  timedOutText: {
    fontFamily: 'source-sans-pro-semibold',
    fontSize: Dimensions.get('window').height / 25,
    padding: 30,
    color: '#616161',
    justifyContent: 'center',
    textAlign: 'center',
  },
  timedOutTextElse: {
    fontSize: Dimensions.get('window').height / 25,
    padding: 30,
    color: '#616161',
    justifyContent: 'center',
  },
  timedOutTextBox: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    height: '60%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 25,
    backgroundColor: '#FFFFFF',
  },
  middleContainer: {
    height: '32%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 25,
  },
});
