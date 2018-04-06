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
          <Text style = { this.state.fontLoaded ? styles.sorryText : styles.anything }>
            SORRY...
          </Text>
          <Image source = { require ('./assets/sorry.png') } style = { styles.imageStyle }/>
        </View>

        <View style = { styles.bottomContainer }>
          <View style = { styles.details }>
            <Text style = { this.state.fontLoaded ? styles.detailsText : styles.anything }>
              Jenny cancelled your game at Phi Delt. Return home to find a new game.
            </Text>
          </View>

          <View style = { styles.homeButton }>
            <Text style = { this.state.fontLoaded ? styles.homeText : styles.anything }>
              Home
            </Text>
          </View>
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
  sorryText: {
    fontFamily: 'bubble-body',
    fontSize: 65,
    padding: 30,
  },
  imageStyle: {
    width: 150,
    height: 150
  },
  bottomContainer: {
    flex: .4,
    backgroundColor: '#93E1FA',
    borderTopColor: '#FFC928',
    borderTopWidth: 13,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  details: {
    width: '70%',
    height: '50%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 20
  },
  detailsText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4F4F4F',
    paddingLeft: '7%',
    paddingRight:'7%',
    fontFamily: 'source-sans'
  },
  homeButton: {
    width: '35%',
    height: '20%',
    borderRadius: 20,
    backgroundColor: '#FFC928',
    justifyContent: 'center'
  },
  homeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4F4F4F',
    fontFamily: 'source-sans'
  }
});
