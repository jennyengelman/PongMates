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
        </View>

        <View style = { styles.bottomContainer }>
          <View style = { styles.details }>
          <Text style = { styles.detailsText }>
            Jenny cancelled your game at Phi Delt. Return home to find a new game.
          </Text>
          </View>

          <View style = { styles.homeButton }>
            <Text style = { styles.homeText }>
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
    paddingLeft: '5%',
    paddingRight:'5%'
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
  }
});
