import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import Logo from './../components/Logo';
import PongButton from './../components/PongButton';

export class AboutScreen extends React.Component {
  static navigationOptions = { header: null };
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={ styles.container }>
        <View style = {{ backgroundColor: '#C2515B', height: '30%', justifyContent: 'center' }}>
          <Logo font={ this.state.fontLoaded }/>
        </View>
        <View style={{ height: '40%', backgroundColor: '#C2515B'}} >
          <View style={ styles.aboutBox }>
            <Text style={ this.state.fontLoaded ? styles.aboutText : styles.aboutTextBackup }>
            Need One is a platform to connect Dartmouth students with Pong partners.{ '\n\n' }Created by three WISP Interns working with the DALI Lab.{ '\n\n' }We hope you enjoy!
            </Text>
          </View>
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: Dimensions.get('window').height / 10,
        }}>
          <PongButton
            font={ this.state.fontLoaded }
            text={ 'Back' }
            navigation={ this.props.navigation }
            destination={ 'Selection' }
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
