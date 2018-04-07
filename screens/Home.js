import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {
  state = {
    fontLoaded: false,
   };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
     });
    this.setState({ fontLoaded: true }) ;
  }
  render() {
    return (
      <View style = { styles.container }>
        <View style = {{ backgroundColor: '#C2515B', height: '80%' }}>
          <View style = {{ flexDirection: 'row', paddingTop: 30 }}>
            <View style = { styles.shadowPong }>
              <View style = { styles.pongContainer }>
                <Text style = { this.state.fontLoaded ? styles.pongText : styles.pongTextElse }>Pong</Text>
                <View style = { styles.matesContainer }>
                  <Text style = { this.state.fontLoaded ? styles.matesText : styles.matesTextElse }>Mates</Text>
                </View>
              </View>
            </View>
          </View>
          <View style = {{ alignItems: 'center', paddingTop: 55 }}>
            <View style = { styles.shadowHome }>
              <View style = { styles.homeRectangle }>
                <View style = {{ borderRadius: 20 }}>
                  <View style = {{ backgroundColor: '#FFC928', width: 200, height: 200, borderRadius: 100, alignItems: 'center' }}>
                    <Image style = {{ width: 200, height: 200 }} source={require('./../assets/image.png')}/>
                    <Text style = { this.state.fontLoaded ? styles.selfieText : styles.selfieTextElse }>Take a selfie to share with your partner!</Text>
                  </View>
                </View>
                <View style = {{ marginTop: 40 }}>
                  <View style = { styles.shadowName }>
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
            </View>
          </View>
          <View style = {{ paddingTop: 20 }}>
            <Button
              onPress = { () => navigate('SelectionScreen') }
              title = 'tap to begin'
              color = 'white'
              fontSize = '35'
              fontFamily = { this.state.fontLoaded ? styles.nextText : styles.nextTextElse }
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
  matesTextElse: {
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
    fontFamily: 'source-sans-pro',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  nameInputElse: {
    width: '80%',
    color: 'white',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
  },
  nextText: {
    fontFamily: 'source-sans-pro',
    textAlign: 'center',
  },
  nextTextElse: {
    textAlign: 'center',
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
  pongTextElse: {
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
    fontSize: 20,
    color: '#696969',
    fontFamily: 'source-sans-pro',
    textAlign: 'center',
  },
  selfieTextElse: {
    position: 'absolute',
    width: 150,
    top: '35%',
    left: '20%',
    fontSize: 20,
    color: '#696969',
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
