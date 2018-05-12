import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { createGame, generateGameKey } from './../services/game-actions';
import YearButton from './../components/YearButton';
import PlaceButton from './../components/PlaceButton';

{/*//component with year button, prop with title (21), prop to highlight*/}
export class CreateScreen extends React.Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: true,
    pressed: {
      years: [],
      places: [],
    },
  };
  pressedYearState = (value) => {
    if (this.state.pressed.years.includes(value)) {
      return true
    }
    else {
      return false
    }
  };
  pressedPlaceState = (value) => {
    if (this.state.pressed.places.includes(value)) {
      return true
    }
    else {
      return false
    }
  };
  pressedYearChange = (value) => {
    var isIn = false;
    var idx = 0;
    this.state.pressed.years.forEach((item, index) => {
      if (value == item) {
        isIn = true;
        idx = index;
      }
    })
    if (isIn) {
      this.state.pressed.years.splice(idx, 1);
    }
    else {
      this.state.pressed.years.push(value);
    }
  };
  pressedPlaceChange = (value) => {
    var isIn = false;
    var idx = 0;
    this.state.pressed.places.forEach((item, index) => {
      if (value == item) {
        isIn = true;
        idx = index;
      }
    })
    this.state.pressed.places.splice(idx, 1);
    if (!isIn) {
      this.state.pressed.places.push(value);
    }
  };
  render() {
    const { navigate } = this.props.navigation
    const user = this.props.navigation.state.params.userObject
    return (
      <View style = { styles.container }>
        <View style = { styles.create }>
          <Text style = { this.state.fontLoaded ? styles.createText : styles.createTextElse }>CREATE GAME</Text>
        </View>
        <View style = {{ paddingTop: '7%' }}>
          <View style = { styles.year }>
            <View style = { styles.yearTop }>
              <Image style = {{ height: 50, width: 50 }} source={require('./../assets/images/graduation.png')}/>
              <Text style = { this.state.fontLoaded ? styles.headerText : styles.headerTextElse }>Year</Text>
              <View style = {{ marginLeft: 10, justifyContent: 'flex-end' }}>
                <Text style = { this.state.fontLoaded ? styles.headerSubText : styles.headerSubTextElse }>Who would you like to play with?</Text>
              </View>
            </View>
            <View style = {{ height: '3%', width: '100%', backgroundColor: '#fff' }}/>
            <View style = { styles.yearBottom }>
              <FlatList
                numColumns={2}
                scrollEnabled={false}
                data = {[
                  { key: 21 },
                  { key: 20 },
                  { key: 19 },
                  { key: 18 },
                ]}
                renderItem = {({ item }) => (
                  <TouchableOpacity onPress={() =>
                    { this.pressedYearChange(item.key)
                    this.forceUpdate() }
                  }>
                  <View style = {{ paddingLeft: 5, paddingTop: 4, paddingBottom: 4 }}>
                    <YearButton title={ item.key } pressed={ this.pressedYearState(item.key) }/>
                  </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
        <View style = {{ paddingTop: '6%' }}>
          <View style = { styles.place }>
            <View style = { styles.placeTop }>
              <Image style = {{ height: 40, width: 40 }} source = { require('./../assets/images/place.png') }/>
              <Text style = { this.state.fontLoaded ? styles.headerText : styles.headerTextElse }>Place</Text>
              <View style = {{ marginLeft: 10, justifyContent: 'flex-end' }}>
                <Text style = { this.state.fontLoaded ? styles.headerSubText : styles.headerSubTextElse }>Please select one.</Text>
              </View>
            </View>
            <View style = {{ height: 4, width: '100%', backgroundColor: '#FFFFFF' }}/>
            <View style = { styles.placeBottom }>
              <FlatList
                numColumns={2}
                data = {[
                  { key: 'Alpha Phi Alpha' },
                  { key: 'Alpha Chi' },
                  { key: 'Alpha Theta' },
                  { key: 'Alpha Phi' },
                  { key: 'Alpha Pi Omega' },
                  { key: 'AXiD' },
                  { key: 'Beta' },
                  { key: 'BG' },
                  { key: 'Chi Delt' },
                  { key: 'Chi Gam' },
                  { key: 'EKT' },
                  { key: 'GDX' },
                  { key: 'Heorot' },
                  { key: 'Kappa' },
                  { key: 'KD' },
                  { key: 'KDE' },
                  { key: 'Lambda Upsilon Lambda' },
                  { key: 'Phi Delt' },
                  { key: 'Phi Tau' },
                  { key: 'Psi U' },
                  { key: 'Sig Ep' },
                  { key: 'Sig Nu' },
                  { key: 'Sigma Delt' },
                  { key: 'Sigma Lambda Upsilon' },
                  { key: 'Tabard' },
                  { key: 'TDX' },
                  { key: 'Zete' },
                ]}
                renderItem = {({ item }) => (
                  <TouchableOpacity onPress={() =>
                    { this.pressedPlaceChange(item.key)
                      this.forceUpdate() }
                  }>
                    <View style = {{ paddingLeft: 5, paddingTop: 2, paddingBottom: 2 }}>
                      <PlaceButton title={ item.key } pressed={ this.pressedPlaceState(item.key) }/>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: '7%' }}>
          <TouchableOpacity onPress={() =>
            navigate('Selection', { id: user.id })
          }>
            <Text style = { this.state.fontLoaded ? styles.cancelText : styles.cancelTextElse }>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            { if (this.state.pressed.places != '' && this.state.pressed.years != '') {
              generateGameKey().then((key) => {
                const game = { id: key, place: this.state.pressed.places, year: this.state.pressed.years, creator: user.id }
                createGame(game)
                navigate('Waiting', { gameObject: game, userObject: user })
              })
            }}
          }>
            <View style = { styles.postButton }>
              <Text style = { this.state.fontLoaded ? styles.postButtonText : styles.postButtonTextElse }>Post!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cancelText: {
    color: '#F2994A',
    fontSize: 30,
    fontFamily: 'source-sans-pro-semibold',
    textAlign: 'center',
  },
  cancelTextElse: {
    color: '#F2994A',
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    height: '70%',
    backgroundColor: '#C2515B',
  },
  create: {
    backgroundColor: '#93E1FA',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 10,
    borderRadius: 5,
    width: '110%',
    marginLeft: Dimensions.get('window').width / -20,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    paddingTop: 17,
    paddingBottom: 3,
    marginTop: '10%',
  },
  createText: {
    fontFamily: 'bubble-body',
    fontSize: Dimensions.get('window').height / 15,
    color: '#FFFFFF',
    width: '75%',
    textAlign: 'center',
    paddingTop: '2%',
  },
  createTextElse: {
    fontSize: Dimensions.get('window').height / 15,
    color: '#FFFFFF',
    width: '75%',
    textAlign: 'center',
  },
  headerText: {
    color: '#545454',
    fontSize: Dimensions.get('window').height / 17,
    fontFamily: 'source-sans-pro-bold',
  },
  headerTextElse: {
    color: '#545454',
    fontSize: Dimensions.get('window').height / 17,
  },
  optionButtons: {
    borderColor: '#545454',
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.6,
    height: Dimensions.get('window').height / 17,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
  },
  optionsPlaceText: {
    fontSize: Dimensions.get('window').height / 35,
    fontFamily: 'source-sans-pro-semibold',
    color: '#545454',
    fontSize: Dimensions.get('window').height / 50,
    fontFamily: 'source-sans-pro-bold',
  },
  optionsTimeText: {
    fontSize: Dimensions.get('window').height / 25,
    fontFamily: 'source-sans-pro-semibold',
    color: '#545454',
    fontSize: Dimensions.get('window').height / 50,
  },
  place: {
    width: '90%',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderColor: '#FFFFFF',
    borderWidth: 5,
    marginLeft: -5,
  },
  placeBottom: {
    backgroundColor: '#FFC928',
    flexDirection: 'row',
    height: Dimensions.get('window').height / 4,
    paddingTop: 5,
    paddingLeft: 15,
    alignItems: 'center',
  },
  placeTop: {
    backgroundColor: '#F2994A',
    height: Dimensions.get('window').height / 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  postButton: {
    backgroundColor: '#F2994A',
    borderRadius: 20,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
  },
  postButtonText: {
    color: '#fff',
    fontFamily: 'source-sans-pro-semibold',
    fontSize: 30,
    textAlign: 'center',
  },
  postButtonTextElse: {
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  year: {
    width: '90%',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderColor: '#FFFFFF',
    borderWidth: 5,
    marginLeft: -5,
  },
  yearBottom: {
    backgroundColor: '#FFC928',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: Dimensions.get('window').height / 6,
    paddingLeft: 15,
    alignItems: 'center',
  },
  yearTop: {
    backgroundColor: '#F2994A',
    height: Dimensions.get('window').height / 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
