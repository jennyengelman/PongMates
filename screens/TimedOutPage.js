import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import PongButton from './../components/PongButton';


export class TimedOutScreen extends React.Component {
  static navigationOptions = { header: null };
  state = { fontLoaded: false };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
      'source-sans': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
      'source-sans-regular': require('./../assets/fonts/SourceSansPro-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <Text style = { styles.sorryText }>Sorry...</Text>
        </View>
        <View style = { styles.middleContainer }>
          <Image style = { styles.brokenPong } source = {require('./../assets/broken-pong.png')}/>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.timedOutTextBox }>
            <Text style = { styles.timedOutText }>Your request timed out. Please try again later!</Text>
          </View>
          <View style = { styles.homeTextBox }>
            <PongButton
              font={ this.state.fontLoaded }
              text={ 'Home' }
              navigation={ this.props.navigation }
              destination={ 'Selection' }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    height: '52%',
    borderTopWidth: 10,
    borderColor: '#FFC928',
    backgroundColor: '#F2994A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brokenPong: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
  container: {
    height: '100%',
  },
  sorryText: {
    fontFamily: 'Cochin',
    fontSize: Dimensions.get('window').height / 14,
    color: '#000000',
  },
  timedOutText: {
    fontFamily: 'Cochin',
    fontSize: Dimensions.get('window').height / 21,
    margin: 25,
    color: '#616161',
    justifyContent: 'center',
  },
  timedOutTextBox: {
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
  },
  middleContainer: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 25,
  },
});
