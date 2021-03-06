import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Font } from 'expo';
import PongButton from './../components/PongButton';
import { StackNavigator } from 'react-navigation';
import { deleteGame } from './../services/game-actions';
import TimerMixin from 'react-timer-mixin';
import { searchDatabase } from './../services/database-actions'


export class WaitingFindScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      matchFound: false,
      user: this.props.navigation.state.params.userObject,
      game: this.props.navigation.state.params.gameObject,
      timer: undefined,
      counter: 0,
      deletedRequest: false,
    }
  }
  componentWillMount() {
    this.everySecond()
  }
  setCounter = (value) => {
    this.setState({ counter: value })
  }
  everySecond = () => {
    if (!this.state.deletedRequest) {
      if (this.state.counter < 10) {
        this.setState({ timer : setTimeout(() => {
          this.setCounter(this.state.counter + 1)
          this.findMatch(this.state.game, this.state.user)
          this.everySecond()
        }, 1000) })
      } else {
        if (this.state.matchFound != true) {
          this.props.navigation.navigate('NoGamesFound', { userObject: this.state.user })
        }
      }
    }
  }
  findMatch = (game, user) => {
    if (this.state.matchFound != true) {
      searchDatabase(game, user).then((result) => {
        this.setState({ matchFound: true })
        this.props.navigation.navigate('FoundGame', { userObject: user, gameObject: result })
      }).catch((error) => {
        this.setState({ matchFound: false })
      })
    }
  }
  render() {
    const { navigate } = this.props.navigation
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
              <Text style = { this.state.fontLoaded ? styles.fontStyle : styles.anything }>
                Searching for games...
              </Text>
          </View>
          <PongButton
            font={ this.state.fontLoaded }
            text={ 'Delete\nRequest' }
            navigation={ this.props.navigation }
            destination={ 'Find' }
            userObject={ this.state.user }
            action = { () => this.setState({ deletedRequest: true }) }
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
    backgroundColor: '#93E1FA',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  tabFontStyle: {
    fontWeight: 'bold',
    color: '#545454',
    fontFamily: 'source-sans-pro',
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
    fontFamily: 'source-sans-pro',
    marginBottom: 5,
  },
  deleteFontStyle:{
    fontWeight: 'bold',
    fontSize: 15,
    color: '#545454',
    fontFamily: 'source-sans-pro',
    textAlign: 'center',
    width: '100%'
  },
  anything: {
    fontSize: 65,
    padding: 30,
  }
 });
