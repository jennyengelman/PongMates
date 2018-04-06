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
        <Text style = { this.state.fontLoaded ? styles.meetMatchText : styles.anything }>
          MEET YOUR MATCH!
        </Text>
        <View style = { styles.detailsContainer }>
          <View style = { styles.details }>
            <Text style = { this.state.fontLoaded ? styles.detailText : styles.anything }>
              Name:{'\n'}Place:{'\n'}Time:
            </Text>
          </View>
        </View>

        <View style = { styles.cancelButton }>
          <Text style = { this.state.fontLoaded ? styles.cancelButtonText : styles.anything }>
            Cancel
          </Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F2994A',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  meetMatchText: {
    marginTop: '20%',
    fontFamily: 'double-bubble',
    textAlign: 'center',
    fontSize: 60,
    color: '#fff'
  },
  detailsContainer: {
    width: '85%',
    height: '50%',
    borderRadius: 25,
    borderWidth: 8,
    borderColor: '#fff',
    backgroundColor: '#93E1FA',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  details: {
    width: '70%',
    height: '38%',
    borderRadius: 25,
    marginBottom: '10%',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  detailText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#4F4F4F',
    fontFamily: 'source-sans',
    marginLeft: '7%'
  },
  cancelButton: {
    width: '30%',
    height: '8%',
    marginBottom: '15%',
    borderRadius: 20,
    backgroundColor: '#FFC928',
    justifyContent: 'center'
  },
  cancelButtonText: {
    textAlign: 'center',
    fontFamily: 'source-sans',
    color: '#545454',
    fontSize: 18,
  }
});
