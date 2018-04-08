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
      'source-sans-pro': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ height: '58%', alignItems: 'center' }}>
          <View style={{ height: '37%', alignItems: 'center' }}>
            <Text style={ this.state.fontLoaded ? styles.congratsText : styles.congratsTextBackup }>
            It{ `'` }s a
            </Text>
            <Text style={ this.state.fontLoaded ? styles.congratsText : styles.congratsTextBackup }>
            Match!
            </Text>
          </View>
          <Image source={ require('./../assets/images/image.png') }
            style={{
            tintColor: '#000000',
            height: '40%',
            width: '41%',
            margin: 'auto',
            marginBottom: 10,
            }}
          />
          <Image source={ require('./../assets/images/person.png') }
            style={{
              height: '15%',
              width: '15%',
              margin: 'auto',
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
            navigate('About')
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
    fontSize: Dimensions.get('window').height / 12,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'double-bubble-shadow',
  },
  congratsTextBackup: {
    fontSize: Dimensions.get('window').height / 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  congratsInfo: {
    fontSize: Dimensions.get('window').height / 20,
    fontWeight: 'bold',
    color: '#4F4F4F',
    margin: 25,
    fontFamily: 'source-sans-pro',
  },
  congratsInfoBackup: {
    fontSize: Dimensions.get('window').height / 20,
    fontWeight: 'bold',
    color: '#4F4F4F',
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
    fontFamily: 'source-sans-pro',
    fontSize: Dimensions.get('window').height / 30,
  },
  buttonTextBackup: {
    color: '#FFFFFF',
    fontSize: Dimensions.get('window').height / 30,
  },
});
