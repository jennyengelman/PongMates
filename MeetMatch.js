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
        <Text style = { styles.meetMatchText }>
          MEET YOUR MATCH!
        </Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F2994A',
    flexDirection: 'column',
  },
});
