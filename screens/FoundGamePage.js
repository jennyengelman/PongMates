import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { updateGame } from './../services/game-actions'


export class FoundScreen extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation
    const user = this.props.navigation.state.params.userObject
    const game = this.props.navigation.state.params.gameObject
    return (
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <Text style = { this.state.fontLoaded ? styles.matchText : styles.matchTextElse }>It{ `'` }s a Match!</Text>
          <Image style = { styles.cup } source = {require('./../assets/images/cup.png')}/>
        </View>
        <View style = { styles.yellowStrip }>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.detailsHeader }>
            <Text style = { this.state.fontLoaded ? styles.detailsHeaderText : styles.detailsHeaderTextElse }>Your Game Details</Text>
          </View>
          <View style = { styles.details }>
            <Text style = { this.state.fontLoaded ? styles.detailsText : styles.detailsTextElse }>Partner: { game.creator.name }</Text>
            <Text style = { this.state.fontLoaded ? styles.detailsText : styles.detailsTextElse }>Place: {game.place[0] }</Text>
          </View>
          <View style = { styles.buttonContainer }>
            <TouchableOpacity onPress={() =>
                navigate('Find', { userObject: user })
              }
            >
              <View style = { styles.button }>
                <Text style = { this.state.fontLoaded ? styles.buttonText : styles.buttonTextElse }>Decline</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
              {
                updateGame(game.id, user.id)
                navigate('MeetYourMatch', { userObject: user, gameObject: game, matchObject: { name : game.creator.name} }) //for now
              }}
            >
              <View style = { styles.button }>
                <Text style = { this.state.fontLoaded ? styles.buttonText : styles.buttonTextElse }>Let{ `'` }s Go!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    bottomContainer: {
      backgroundColor: '#93E1FA',
      alignItems: 'center',
      flex: 1,
      paddingTop: 25,
    },
    button: {
      backgroundColor: '#FFC928',
      justifyContent: 'center',
      borderRadius: 20,
      height: 75,
      width: 125,
      marginLeft: 20,
      marginRight: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      paddingTop: '5%',
    },
    buttonText: {
      textAlign: 'center',
      fontFamily: 'source-sans-pro',
      color: '#4F4F4F',
      fontSize: 30,
    },
    buttonTextElse: {
      textAlign: 'center',
      color: '#4F4F4F',
      fontSize: 30,
    },
    container: {
      flex: 2,
    },
    cup: {
      width: 200,
      height: 125,
    },
    details: {
      borderRadius: 20,
      backgroundColor: 'white',
      width: '75%',
      height: 175,
      justifyContent: 'space-around',
      paddingLeft: 15,
    },
    detailsText: {
      fontSize: 30,
      color: '#4F4F4F',
      fontFamily: 'source-sans-pro',
      textAlign: 'left',
    },
    detailsTextElse: {
      fontSize: 30,
      color: '#4F4F4F',
      textAlign: 'left',
    },
    detailsHeader: {
      backgroundColor: '#FFC928',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      width: '50%',
      height: 40,
      justifyContent: 'center',
    },
    detailsHeaderText: {
      fontFamily: 'source-sans-pro',
      color: '#4F4F4F',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
    detailsHeaderTextElse: {
      color: '#4F4F4F',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
    matchText: {
      fontFamily: 'source-sans-pro',
      fontSize: 72,
      textAlign: 'center',
      color: '#4F4F4F',
      width: '60%',
    },
    matchTextElse: {
      fontSize: 72,
      textAlign: 'center',
      color: '#4F4F4F',
    },
    topContainer: {
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1,
    },
    yellowStrip: {
      backgroundColor: '#FFC928',
      height: '1.5%',
    },
  });
