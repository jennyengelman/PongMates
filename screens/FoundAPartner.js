import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import PongButton from './../components/PongButton';

export class FoundAPartnerScreen extends React.Component {
  static navigationOptions = { header: null };
  state = { fontLoaded: false };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro-bold': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigate } = this.props.navigation
    const userID = this.props.navigation.state.params.id
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={ styles.topContainer }>
          <Text style={ this.state.fontLoaded ? styles.congratsText : styles.congratsTextBackup }>
          IT{ `'` }S A MATCH!
          </Text>
        </View>
        <View style={ styles.middleContainer }>
          <Image source={ require('./../assets/images/image.png') }
            style={{
            tintColor: '#000000',
            height: Dimensions.get('window').width / 2.1,
            width: Dimensions.get('window').width / 2.1,
            marginBottom: Dimensions.get('window').height / 50,
            marginTop: Dimensions.get('window').height / 50,
            }}
          />
          <Image source={ require('./../assets/images/person.png') }
            style={{
              height: Dimensions.get('window').width / 8,
              width: Dimensions.get('window').width / 8,
              marginBottom: Dimensions.get('window').height / 50,
            }}
          />
        </View>
        <View style={ styles.congratsContainer }>
          <View style={ styles.congratsBox }>
            <Text style={ this.state.fontLoaded ? styles.congratsInfo : styles.congratsInfoBackup }>
            Name: Jenny{ '\n' }Place: Phi Delt{ '\n' }Time: Now
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() =>
            navigate('Home', { id: userID }) //for now
          } style={ styles.bottomButton }
        >
          <View style={ styles.bottomButton }>
            <Text style={ this.state.fontLoaded ? styles.buttonText : styles.buttonTextBackup }>
            tap to continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  topContainer: {
    height: '19%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
  },
  middleContainer: {
    height: '39%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  congratsContainer: {
    width: '100%',
    height: '36%',
    backgroundColor: '#F2994A',
    borderTopWidth: 10,
    borderColor: '#FFC928',
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsBox: {
    width: '80%',
    height: '70%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  congratsText: {
    fontSize: Dimensions.get('window').height / 14,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'bubble-body',
  },
  congratsTextBackup: {
    fontSize: Dimensions.get('window').height / 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: Dimensions.get('window').height / 30,
  },
  congratsInfo: {
    fontSize: Dimensions.get('window').height / 21,
    fontWeight: 'bold',
    color: '#616161',
    margin: 25,
    fontFamily: 'source-sans-pro-bold',
  },
  congratsInfoBackup: {
    fontSize: Dimensions.get('window').height / 21,
    fontWeight: 'bold',
    color: '#616161',
    margin: 25,
  },
  bottomButton: {
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC928',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'source-sans-pro-bold',
    fontSize: Dimensions.get('window').height / 30,
  },
  buttonTextBackup: {
    color: '#FFFFFF',
    fontSize: Dimensions.get('window').height / 30,
  },
});
