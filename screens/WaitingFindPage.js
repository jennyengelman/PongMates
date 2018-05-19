import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Font } from 'expo';
import PongButton from './../components/PongButton';
import { StackNavigator } from 'react-navigation';
import { deleteGame } from './../services/game-actions';

export class WaitingFindScreen extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation
    {console.log}
    const user = this.props.navigation.state.params.userObject
    const game = this.props.navigation.state.params.gameObject
    return (
      <View style = { styles.background }>
        <View style = { styles.topContainer }>
          <Text style = { this.state.fontLoaded ? styles.waitingFont : styles.anything }>
            waiting...
          </Text>
        </View>
        <View style = { styles.bottomContainer }>
        <View style = { styles.tabStyle }>
          <Text style = { this.state.fontLoaded ? styles.tabFontStyle : styles.anything }>Your Game Details</Text>
        </View>
          <View style = { styles.innerContainer }>
            <View style = {{ paddingBottom: 5 }}>
              <Text style = { this.state.fontLoaded ? styles.fontStyle : styles.anything }>Name: { user.name }</Text>
            </View>
            <View style = {{ paddingTop: 5 }}>
              <Text style = { this.state.fontLoaded ? styles.fontStyle : styles.anything }>Place: { game.place }</Text>
            </View>
          </View>
          <PongButton
            font={ this.state.fontLoaded }
            text={ 'Delete\nRequest' }
            navigation={ this.props.navigation }
            destination={ 'Selection' }
            action = { () => {} }
          />
        </View>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  background: {
    flex: 2,
    flexDirection: 'column',
  },
  topContainer: {
    flex: .57,
    backgroundColor:'#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  waitingFont: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height / 20,
    paddingTop: 10,
    margin: 10,
    fontFamily: 'bubble-body',
  },
  bottomContainer: {
    borderTopColor: '#FFC928',
    borderTopWidth: 15,
    flex: .43,
    backgroundColor: '#F2994A',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  tabFontStyle: {
    fontWeight: 'bold',
    color: '#545454',
    fontFamily: 'source-sans-pro-semibold',
    fontSize: Dimensions.get('window').width / 18,
  },
  tabStyle: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 10,
    backgroundColor: '#FFC928',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  fontStyle: {
    fontSize: Dimensions.get('window').height / 25,
    fontWeight: 'bold',
    marginLeft: 15,
    fontFamily: 'source-sans-pro-semibold',
    marginBottom: 5,
  },
  deleteFontStyle:{
    fontWeight: 'bold',
    fontSize: 15,
    color: '#545454',
    fontFamily: 'source-sans-pro-semibold',
    textAlign: 'center',
    width: '100%'
  },
  anything: {
    fontSize: 65,
    padding: 30,
  }
 });
