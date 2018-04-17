import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble': require('./assets/fonts/Double_Bubble_shadow.otf'),
      'bubble-body': require('./assets/fonts/Bubbleboddy-FatTrial.ttf'),
      'source-sans': require('./assets/fonts/source-sans-pro.semibold.ttf')
    });
    this.setState({ fontLoaded: true }) ;
  }
  render(){
    return(
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <View>
            <Text style = { this.state.fontLoaded ? styles.matchText : styles.anything }>
              IT'S A MATCH!'
            </Text>
          </View>
          <Image source = { require ('./assets/ball.png')} style = { styles.ballStyle }/>
          <Image source = { require ('./assets/person.png')} style = { styles.personStyle }/>
        </View>

        <View style = { styles.bottomContainer }>
          <View style = { styles.matchDetails }>
            <Text style = { this.state.fontLoaded ? styles.detailsStyle : styles.anything }>
              Name: {'\n'}Place: {'\n'}Time:
            </Text>
          </View>
        </View>

        <View style = { styles.continue }>
          <Text style = { this.state.fontLoaded ? styles.continueText : styles.anything }>
            tap to continue
          </Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
  },
  topContainer: {
    flex: .6,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  matchText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 50,
      fontFamily: 'double-bubble'
  },
  imageContainer:{
    width: 500,
    height:500
  },
  ballStyle: {
    width: '50%',
    height: '50%',
    padding: -50,
  },
  personStyle: {
    width: '20%',
    height: '20%',
  },
  bottomContainer: {
    flex: .33,
    backgroundColor: '#F2994A',
    borderTopColor: '#FFC928',
    borderTopWidth: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  matchDetails: {
    width: '70%',
    height: '55%',
    backgroundColor: '#fff',
    borderRadius: 23,
    justifyContent: 'center',
  },
  detailsStyle: {
    fontWeight: 'bold',
    margin: 15,
    fontSize: 28,
    color: '#4F4F4F',
    fontFamily: 'source-sans'
  },
  continue: {
    flex: .07,
    backgroundColor: '#FFC928',
    justifyContent: 'center'
  },
  continueText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
    fontFamily: 'source-sans'
  }
});
