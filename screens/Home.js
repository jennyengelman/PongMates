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
        <View style = {{ backgroundColor: '#C2515B', height: '70%' }}>
          <Logo font={ this.state.fontLoaded }/>
          <View style = {{ alignItems: 'center', marginTop: '8%'}}>
            <View style = { styles.homeRectangle }>
              <View style = {{ backgroundColor: '#FFC928', width: Dimensions.get('window').width * .55, height: Dimensions.get('window').width * .55, borderRadius: Dimensions.get('window').width * .275, justifyContent: 'center' }}>
                <Image style = {{ width: Dimensions.get('window').width * .55, height: Dimensions.get('window').width * .55, }} source={require('./../assets/image.png')}/>
                {this.state.fontLoaded ? (<Text style = { styles.selfieText }>Take a selfie to share with your partner!</Text>) : (<Text style = {{ position: 'absolute', width: 150, top: '35%', left: '20%', fontSize: 20, color: '#696969' }}>Take a selfie to share with your partner!</Text>)}
              </View>
              <View style = { styles.nameContainer }>
                <TextInput
                  style = { styles.nameInput }
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
            <Text style={ this.state.fontLoaded ? styles.buttonText : styles.buttonTextBackup }>
            tap to begin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'source-sans-pro',
    fontSize: Dimensions.get('window').height / 30,
  },
  buttonTextBackup: {
    color: '#FFFFFF',
    fontSize: Dimensions.get('window').height / 30,
  },
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
    fontFamily: 'Cochin',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
  },
  selfieText: {
    position: 'absolute',
    alignSelf: 'center',
    width: Dimensions.get('window').width * .4,
    fontSize: Dimensions.get('window').width / 15,
    color: '#696969',
    fontFamily: 'source-sans-pro',
    textAlign: 'center',
  },
});
