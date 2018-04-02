import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {
  state = {
    fontLoaded: false,
    name: '',
  };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/SourceSansPro-SemiBold.ttf'),
    });
    this.setState({ fontLoaded: true});
  }
  render() {
    return (
      <View style = { styles.container }>
        <View style = {{ backgroundColor: '#C2515B', height: '80%' }}>
          <View style = {{ flexDirection: 'row', paddingTop: 30 }}>
            <View style = { styles.shadowPong }>
              <View style = { styles.pongContainer }>
                this.state.fontLoaded ? (<Text style = { styles.pongText }>Pong</Text>) : (<Text style = {{ fontSize: 60, color: 'white', paddingRight: 45 }}>Pong</Text>)
                <View style = { styles.matesContainer }>
                  this.state.fontLoaded ? (<Text style = { styles.matesText }>Mates</Text>) : (<Text style = {{ fontSize: 60, color: 'white', paddingRight: 45 }}>Mates</Text>)
                </View>
              </View>
            </View>
          </View>
          <View style = {{ alignItems: 'center', paddingTop: 55 }}>
            <View style = { styles.shadowHome }>
              <View style = { styles.homeRectangle }>
                <View style = {{ borderRadius: 20 }}>
                  <View style = {{ backgroundColor: '#FFC928', width: 200, height: 200, borderRadius: 100 }}>
                    <Image style = {{ width: 200, height: 200 }} source={require('./../assets/image.png')}/>
                    this.state.fontLoaded ? (<Text style = { styles.selfieText }>Take a selfie to share with your partner!</Text>) : (<Text style = {{ position: 'absolute', width: 150, top: '35%', left: '20%', fontSize: 20, color: '#696969' }}>Take a selfie to share with your partner!</Text>)
                  </View>
                </View>
                <View style = {{ paddingTop: 40 }}>
                  <View style = { styles.shadowName }>
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
            </View>
          </View>
          <View style = {{ paddingTop: 20 }}>
            <Button
              onPress = { () => navigate('SelectionScreen') }
              title = 'tap to begin'
              color = 'white'
              fontSize = '35'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    width: 150,
    height: 45,
    justifyContent: 'flex-end',
    backgroundColor: '#93E1FA',
  },
  container: {
    flex: 2,
    backgroundColor: '#F2994A',
  },
  homeRectangle: {
    backgroundColor: '#93E1FA',
    height: 380,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 20,
    borderColor: 'white',
    borderWidth: 7,
  },
  matesContainer: {
    backgroundColor: '#FFC928',
    width: 240,
    height: 110,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 5,
    position: 'absolute',
    left: '80%',
    top: '20%',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  matesText: {
    fontFamily: 'double-bubble-shadow',
    fontSize: 60,
    color: 'white',
    paddingLeft: 3,
  },
  nameContainer: {
    width: 250,
    height: 50,
    backgroundColor: '#FFC928',
    borderColor: 'white',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    width: '80%',
    color: 'white',
    fontFamily: 'Cochin',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
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
  pongText: {
    fontFamily: 'double-bubble-shadow',
    fontSize: 60,
    color: 'white',
    paddingRight: 45,
  },
  removeHeaderOverlap: {
    backgroundColor: '#FFC928',
    width: 35,
    height: 88,
    backgroundColor: '#FFC928',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#FFC928',
  },
  selfieText: {
    position: 'absolute',
    width: 150,
    top: '35%',
    left: '20%',
    fontSize: 20,
    color: '#696969',
    fontFamily: 'source-sans-pro',
  },
  shadowHome: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  shadowName: {
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  shadowPong: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
});
