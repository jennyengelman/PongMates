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
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
      'source-sans': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
      'source-sans-regular': require('./../assets/fonts/SourceSansPro-Regular.ttf'),
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
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: Dimensions.get('window').height / 20,
        }}>
          <PongButton
            font={ this.state.fontLoaded }
            text={ 'Back' }
            navigation={ this.props.navigation }
            destination={ 'Home' }
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
    width: Dimensions.get('window').width * .80,
    height: Dimensions.get('window').height * .50,
    alignSelf: 'center',
    backgroundColor: '#93E1FA',
    marginTop: '8%',
    borderColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
  },
  aboutText: {
    fontSize: Dimensions.get('window').height / 32,
    fontWeight: 'bold',
    color: '#4F4F4F',
    margin: 20,
    textAlign: 'center',
    fontFamily: 'source-sans',
  },
  aboutTextBackup: {
    fontSize: Dimensions.get('window').height / 32,
    fontWeight: 'bold',
    color: '#4F4F4F',
    margin: 20,
    textAlign: 'center',
  },
});
