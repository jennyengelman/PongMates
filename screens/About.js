import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import Logo from './../components/Logo';
import PongButton from './../components/PongButton';



export class About extends React.Component {
  static navigationOptions = {header: null };
  state = { fontLoaded: false };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={ styles.container }>
        <View style={{ height: '70%', backgroundColor: '#C2515B' }}>
          <Logo font={ this.state.fontLoaded }/>
          <View style={ styles.aboutBox }>
            <Text style={ this.state.fontLoaded ? styles.aboutText : styles.aboutTextBackup }>
            PongMates is designed to connect Dartmouth students through the game of Pong.{ '\n\n' }Created by three WISP Interns working with the DALI Lab.{ '\n\n' }We hope you enjoy!
            </Text>
          </View>
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: '8%',
        }}>
          <PongButton
            font={ this.state.fontLoaded }
            text={ 'Back' }
            navigation={ this.props.navigation }
            destination={ 'Congrats' }
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F2994A',
  },
  aboutBox: {
    width: '80%',
    height: '70%',
    alignSelf: 'center',
    backgroundColor: '#93E1FA',
    marginTop: '8%',
    borderColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    fontSize: Dimensions.get('window').height / 31,
    fontWeight: 'bold',
    color: '#4F4F4F',
    margin: 20,
    textAlign: 'center',
    fontFamily: 'source-sans-pro',
  },
  aboutTextBackup: {
    fontSize: Dimensions.get('window').height / 31,
    fontWeight: 'bold',
    color: '#4F4F4F',
    margin: 20,
    textAlign: 'center',
  },
});
