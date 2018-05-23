import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import Logo from './../components/Logo';
import PongButton from './../components/PongButton';

export class AboutScreen extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation
    const user = this.props.navigation.state.params.userObject
    return (
      <View style={ styles.container }>
        <View style = {{ justifyContent: 'center' }}>
          <Logo font={ this.state.fontLoaded }/>
        </View>
        <View style={ styles.aboutBox }>
          <Text style={ this.state.fontLoaded ? styles.aboutText : styles.aboutTextBackup }>Need One is a platform to connect Dartmouth students with Pong partners.{ '\n\n' }Created by three WISP Interns working with the DALI Lab.{ '\n\n' }We hope you enjoy!</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <PongButton
            font={ this.state.fontLoaded }
            text={ 'Back' }
            navigation={ this.props.navigation }
            destination={ 'Selection' }
            id = { user.id }
            action = { () => {} }
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#C2515B'
  },
  aboutBox: {
    width: Dimensions.get('window').width * .80,
    height: Dimensions.get('window').height * .50,
    alignSelf: 'center',
    backgroundColor: '#93E1FA',
    marginTop: '5%',
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
    fontFamily: 'source-sans-pro-semibold',
  },
  aboutTextBackup: {
    fontSize: Dimensions.get('window').height / 32,
    fontWeight: 'bold',
    color: '#4F4F4F',
    margin: 20,
    textAlign: 'center',
  },
});
