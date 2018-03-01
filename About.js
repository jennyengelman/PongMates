import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font } from 'expo';


export class About extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./assets/fonts/Double_Bubble_shadow.otf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: '70%', backgroundColor: '#C2515B'}}>
            <Logo font={this.state.fontLoaded}>
            </Logo>
            <View style={styles.aboutBox}>
              <Text style={styles.aboutText}>PongMates is designed to connect Dartmouth students through the game of Pong.{"\n"}{"\n"}Created by three WISP Interns working with the DALI Lab.{"\n"}{"\n"}We hope you enjoy! </Text>
            </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 30}}>
          <View style={[styles.button, {backgroundColor: "#FFC928"}]}>
            <Button
              onPress={Logo}
              title="Back"
              color='white'
              fontWeight='bold'
            />
          </View>
        </View>
      </View>
    );
  }
}


export class Logo extends React.Component {
  render() {
    return (
      <View style = {{height: '30%', flexDirection: 'column', marginTop: 30}}>
        <View style={[styles.logo, styles.pong]}>
        </View>
        <View style={[styles.logo, styles.mates, {marginTop: 30}]}>
        </View>
        <View style={[styles.logo, styles.pong, styles.cover, {marginTop: 7}]}>
        </View>
        <View style={[styles.logo, styles.mates, styles.cover, {marginTop: 37}]}>
        </View>
        {
          this.props.font ? (
          <View style={{alignSelf: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute', marginTop: 20}}>
            <Text style={[styles.pongMatesText, {fontFamily: 'double-bubble-shadow', fontSize: 56 }]}>
            Pong
            </Text>
            <Text style={[styles.pongMatesText, {fontFamily: 'double-bubble-shadow', fontSize: 56, marginTop: 30}]}>
            Mates
            </Text>
          </View>
          ) : null
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F2994A',
  },
  logo: {
    backgroundColor: '#FFC928',
    width: '60%',
    height: 110,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 7,
    position: 'absolute',
  },
  pong: {
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'flex-end',
  },
  mates: {
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    alignSelf: 'flex-end',
  },
  cover: {
    borderWidth: 0,
    height: 96,
  },
  aboutBox: {
    width: '80%',
    height: '70%',
    alignSelf: 'center',
    backgroundColor: "#93E1FA",
    marginTop: '10%',
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F4F4F',
    margin: 20,
    textAlign: 'center',
  },
  button: {
    width: 130,
    height: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pongMatesText: {
    fontSize: 40,
    color: 'white',
  },
});
