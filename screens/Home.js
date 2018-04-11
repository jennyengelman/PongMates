import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import Logo from './../components/Logo';

export class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro-bold': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
      'source-sans': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
      'source-sans-regular': require('./../assets/fonts/SourceSansPro-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { styles.container }>
        <View style = {{ backgroundColor: '#C2515B', height: '30%', justifyContent: 'center' }}>
          <Logo font={ this.state.fontLoaded }/>
        </View>
        <View style = {{ backgroundColor: '#C2515B', height: '40%' }}>
          <View style = {{ alignItems: 'center', paddingTop: '5%' }}>
            <View style = { styles.homeRectangle }>
              <View style = {{ backgroundColor: '#FFC928', width: Dimensions.get('window').width * .55, height: Dimensions.get('window').width * .55, borderRadius: Dimensions.get('window').width * .275, justifyContent: 'center' }}>
                <Image style = {{ width: Dimensions.get('window').width * .55, height: Dimensions.get('window').width * .55 }} source={ require('./../assets/images/image.png') }/>
                <Text style = { this.state.fontLoaded ? styles.selfieText : styles.selfieTextElse }>Take a selfie to share with your partner!</Text>
              </View>
              <View style = { styles.nameContainer }>
                <TextInput
                  style = { this.state.fontLoaded ? styles.nameInput : styles.nameInputElse }
                  placeholder = "Your Name"
                  onChangeText = { (text) => this.setState({ name: text }) }
                />
              </View>
            </View>
          </View>
        </View>
        <View style = {{ height: '30%', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: Dimensions.get('window').height / 20 }}>
          <TouchableOpacity onPress={() =>
              navigate('Selection')
            }
          >
            <Text style={ this.state.fontLoaded ? styles.nextText : styles.nextTextElse }>
            tap to begin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2994A',
  },
  homeRectangle: {
    backgroundColor: '#93E1FA',
    height: Dimensions.get('window').height * .50,
    width: Dimensions.get('window').width * .80,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height / 50,
    borderColor: '#FFFFFF',
    borderWidth: 7,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
  },
  matesTextElse: {
    fontSize: 60,
    color: '#FFFFFF',
    paddingLeft: 3,
  },
  matesTextElse: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    marginLeft: -35,
  },
  matesTextElse: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    marginLeft: -35,
  },
  nameContainer: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').width / 7,
    backgroundColor: '#FFC928',
    borderColor: '#FFFFFF',
    borderWidth: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height / 45,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
  },
  nameInput: {
    width: '80%',
    color: '#FFFFFF',
    fontFamily: 'source-sans',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  nameInputElse: {
    width: '80%',
    color: '#FFFFFF',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  nextText: {
    fontFamily: 'source-sans-pro',
    textAlign: 'center',
    color: '#696969',
  },
  nextTextElse: {
    textAlign: 'center',
    color: '#696969',
  },
  pongContainer: {
    backgroundColor: '#FFC928',
    width: 220,
    height: 110,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 5,
    marginLeft: -5,
  },
  nextText: {
    fontFamily: 'source-sans-pro-bold',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height / 30,
  },
  nextTextElse: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height / 30,
  },
  selfieText: {
    position: 'absolute',
    alignSelf: 'center',
    width: Dimensions.get('window').width * .4,
    fontSize: Dimensions.get('window').width / 15,
    color: '#696969',
    fontFamily: 'source-sans-pro-bold',
    textAlign: 'center',
  },
  selfieTextElse: {
      position: 'absolute',
      alignSelf: 'center',
      width: Dimensions.get('window').width * .4,
      fontSize: Dimensions.get('window').width / 15,
      color: '#696969',
      textAlign: 'center',
  },
});
