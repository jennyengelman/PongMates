import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import PongButton from './../components/PongButton';
import { Font } from 'expo';

export class CancelScreen extends React.Component {
  static navigationOptions = { header: null };
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={this.state.fontLoaded ? styles.sorryText : styles.anything}>
            SORRY...
          </Text>
          <Image source={ require('./../assets/images/sad.png') } style={ styles.imageStyle } />
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.details}>
            <Text style={this.state.fontLoaded ? styles.detailsText : styles.anything}>
              Jenny cancelled your game at Phi Delt. Return home to find a new game.
            </Text>
          </View>

          <PongButton
           font = { this.state.fontLoaded }
           text = { 'Home' }
           navigation = { this.props.navigation }
           destination = { 'HomeScreen' }
           />
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
    backgroundColor: '#fff',
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
    fontSize: Dimensions.get('window').height / 35,
    color: '#4F4F4F',
    paddingLeft: '7%',
    paddingRight: '7%',
    fontFamily: 'source-sans-pro-semibold'
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
    fontFamily: 'source-sans-pro-semibold'
  },
  anything: {
    fontSize: 65,
    padding: 30,
  }
});
