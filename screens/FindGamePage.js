import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase'
import * as firebaseConfig from './../services/firebase-config'
import { searchDatabase } from './../services/database-actions'


export class FindScreen extends React.Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
      'source-sans-pro-bold': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style = { styles.container }>
        <View style = { styles.find }>
          <Text style = { this.state.fontLoaded ? styles.findText : styles.findTextElse }>FIND GAME</Text>
        </View>
        <View style = {{ paddingTop: '7%' }}>
          <View style = { styles.time }>
            <View style = { styles.timeTop }>
              <Image style = {{ height: 40, width: 40 }} source={require('./../assets/images/time.png')}/>
              <Text style = { this.state.fontLoaded ? styles.headerText : styles.headerTextElse }>Time</Text>
            </View>
            <View style = {{ height: '3%', width: '100%', backgroundColor: '#fff' }}>
            </View>
            <View style = { styles.timeBottom }>
              <View style = { styles.optionButtons }>
                <Text style = { this.state.fontLoaded ? styles.optionsTimeText : styles.optionsTimeTextElse }>Now</Text>
              </View>
              <View style = { styles.optionButtons }>
                <Text style = { this.state.fontLoaded ? styles.optionsTimeText : styles.optionsTimeTextElse }>Later</Text>
              </View>
            </View>
          </View>
        </View>
        <View style = {{ paddingTop: '6%' }}>
          <View style = { styles.place }>
            <View style = { styles.placeTop }>
              <Image style = {{ height: 40, width: 40 }} source = { require('./../assets/images/place.png') }/>
              <Text style = { this.state.fontLoaded ? styles.headerText : styles.headerTextElse }>Place</Text>
            </View>
            <View style = {{ height: '2.5%', width: '100%', backgroundColor: '#fff' }}>
            </View>
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
                  <View style = {{ paddingLeft: Dimensions.get('window').width / 30, paddingTop: Dimensions.get('window').height / 50 }}>
                    <View style = { styles.optionButtons }>
                      <Text style = { this.state.fontLoaded ? styles.optionsTextPlace : styles.optionsTextPlaceElse }>{ item.key }</Text>
                    </View>
                  </View>
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
            searchDatabase({ year: [21, 19], place : ["Alpha Theta", "Alpha Phi", "ChiGam"] }, { year: 21, id: "-LCF7nuE1RLtA8nAJf9S" }).then((result) => {
              console.log("Searching the database has yielded the following match: ")
              console.log(result)
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
  find: {
    backgroundColor: '#93E1FA',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 10,
    borderRadius: 5,
    width: '110%',
    marginLeft: -10,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    paddingTop: 17,
    paddingBottom: 3,
    marginTop: '10%',
  },
  findText: {
    fontFamily: 'bubble-body',
    fontSize: 50,
    color: 'white',
    width: '50%',
    textAlign: 'center',
  },
  findTextElse: {
    fontSize: 50,
    color: 'white',
    width: '75%',
    textAlign: 'center',
  },
  headerText: {
    color: '#545454',
    fontSize: 35,
    fontFamily: 'source-sans-pro-bold',
  },
  headerTextElse: {
    color: '#545454',
    fontSize: 35,
  },
  optionButtons: {
    borderColor: '#545454',
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  optionsPlaceText: {
    fontSize: 18,
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
    fontSize: 30,
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
    borderColor: '#fff',
    borderWidth: 5,
    marginLeft: -5,
  },
  placeBottom: {
    backgroundColor: '#FFC928',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: Dimensions.get('window').height / 4,
    paddingTop: 5,
    paddingBottom: 5,
  },
  placeTop: {
    backgroundColor: '#F2994A',
    height: 50,
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
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  postButtonText: {
    color: '#fff',
    fontFamily: 'source-sans-pro',
    fontSize: 30,
    textAlign: 'center',
  },
  postButtonTextElse: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  time: {
    width: '90%',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderColor: '#fff',
    borderWidth: 5,
    marginLeft: -5,
  },
  timeBottom: {
    backgroundColor: '#FFC928',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
  },
  timeTop: {
    backgroundColor: '#F2994A',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
