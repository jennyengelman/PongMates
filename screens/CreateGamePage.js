import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import moment from 'moment';

export class CreateScreen extends React.Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: false,
    pressed: {
      year: [],
      place: [],
    },
  };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
      'source-sans-pro': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
      'source-sans-pro-bold': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
     });
    this.setState({ fontLoaded: true }) ;
  };
  check = (item, index, arr) => {
    if (item == arr[index]) {
      return true
    }
  }
  pressedYearState = (item) => {
    if (!this.state.pressed.year.forEach(check(item))) {
      return false;
    }
    return true;
  };
  pressedPlaceState = (item) => {
    if (!this.state.pressed.place.forEach(check(item))) {
      return false;
    }
    return true;
  };
  pressedYearChange = (item) => {
    if (!this.state.pressed.year.forEach(check(item))) {
      this.state.pressed.year.splice(item);
    }
    else {
      this.state.pressed.year.push(item);
    }
  };
  pressedPlaceChange = (item) => {
    if (!this.state.pressed.place.forEach(check(item))) {
      this.state.pressed.place.splice(item);
    }
    else {
      this.state.pressed.place.push(item);
    }
  };
  render() {
    const { navigate } = this.props.navigation
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
                  <TouchableOpacity
                    onPress={() => this.pressedChange(item.key)}
                  >
                  <View style = {{ paddingLeft: 5, paddingTop: 4, paddingBottom: 4 }}>
                    <View style = { this.pressedState(item.key) ? styles.yearButtonsPressed : styles.yearButtons }>
                      <View style = { styles.yearButtons }>
                        <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>{ item.key }</Text>
                      </View>
                    </View>
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
                  <TouchableOpacity>
                    <View style = {{ paddingLeft: 5, paddingTop: 2, paddingBottom: 2 }}>
                      <View style = { styles.placeButtons }>
                        <Text style = { this.state.fontLoaded ? styles.optionsPlaceText : styles.optionsPlaceTextElse }>{ item.key }</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: '7%' }}>
          <TouchableOpacity onPress={() =>
            navigate('Home')
          }>
            <Text style = { this.state.fontLoaded ? styles.cancelText : styles.cancelTextElse }>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            generateUserKey().then((key) => {
              myGameKey = generateGameKey()
              createGame({id: myGameKey, place: this.state.place, year: this.state.year})
            })
            
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
    fontFamily: 'source-sans-pro',
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
  optionsPlaceText: {
    fontSize: Dimensions.get('window').height / 35,
    fontFamily: 'source-sans-pro',
    color: '#545454',
    textAlign: 'center',
  },
  optionsPlaceTextElse: {
    fontSize: 18,
    color: '#545454',
    textAlign: 'center',
  },
  optionsTimeText: {
    fontSize: Dimensions.get('window').height / 25,
    fontFamily: 'source-sans-pro',
    color: '#545454',
    textAlign: 'center',
  },
  optionsTimeTextElse: {
    fontSize: 30,
    color: '#545454',
    textAlign: 'center',
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
  placeButtons: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.75,
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    marginBottom: 7,
  },
  placeButtonsPressed: {
    borderColor: '#545454',
    borderWidth: 10,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: '45%',
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    marginBottom: 7,
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
    color: '#FFFFFF',
    fontFamily: 'source-sans-pro',
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
  yearButtons: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.75,
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowColor: '#444444',
    shadowOffset: { height: 0, width: 0 },
  },
  yearButtonsPressed: {
    borderColor: '#545454',
    borderRadius: 50,
    borderWidth: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.75,
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowColor: '#444444',
    shadowOffset: { height: 0, width: 0 },
  },
  yearTop: {
    backgroundColor: '#F2994A',
    height: Dimensions.get('window').height / 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
