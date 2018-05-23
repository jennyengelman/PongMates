import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import PongButton from './../components/PongButton';

export class NoGamesFoundScreen extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation
    const user = this.props.navigation.state.params.userObject
    return (
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <Text style = { this.state.fontLoaded ? styles.sorryText : styles.sorryTextElse }>Sorry...</Text>
          <Image style = { styles.cup } source = {require('./../assets/images/spilledcup.png')}/>
        </View>
        <View style = { styles.yellowStrip }>
        </View>
        <View style = { styles.bottomContainer }>
          <View style = { styles.details }>
            <Text style = { this.state.fontLoaded ? styles.detailsText : styles.detailsTextElse }>No games found. Adjust your search filter or try again later.</Text>
          </View>
          <View style = {{ flexDirection: 'row' }}>
            <PongButton
              font = { this.state.fontLoaded ? 'source-sans-pro' : 'Cochin' }
              text = { 'Home' }
              navigation = { this.props.navigation }
              destination={ 'Selection' }
              id = { user.id }
              style = {{ paddingRight: '10%' }}
              action = { () => {} }
            />
            <View style = {{ width: '15%' }}/>
            <PongButton
              font = { this.state.fontLoaded ? 'source-sans-pro' : 'Cochin' }
              text = { 'Change Filter' }
              navigation = { this.props.navigation }
              destination = { 'Find' }
              userObject = { user }
              action = { () => {} }
            />
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
      paddingTop: '10%',
    },
    container: {
      flex: 2,
    },
    cup: {
      width: '50%',
      height: '50%',
      marginBottom: '8%',
    },
    details: {
      borderRadius: 20,
      backgroundColor: 'white',
      width: '75%',
      height: '60%',
      justifyContent: 'space-around',
    },
    detailsText: {
      fontSize: 30,
      color: '#4F4F4F',
      fontFamily: 'source-sans-pro-semibold',
      textAlign: 'center',
    },
    detailsTextElse: {
      fontSize: 30,
      color: '#4F4F4F',
      textAlign: 'center',
    },
    sorryText: {
      fontFamily: 'source-sans-pro-semibold',
      fontSize: 72,
      textAlign: 'center',
      color: '#4F4F4F',
      width: '60%',
    },
    sorryTextElse: {
      fontSize: 72,
      textAlign: 'center',
      color: '#4F4F4F',
    },
    topContainer: {
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1,
      paddingTop: '15%',
    },
    yellowStrip: {
      backgroundColor: '#FFC928',
      height: '1.25%',
    },
  });
