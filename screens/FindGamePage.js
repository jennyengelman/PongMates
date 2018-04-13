import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

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
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style = { styles.container }>
        <View style = { styles.find }>
          <Text style = { this.state.fontLoaded ? styles.findText : styles.findTextElse }>FIND</Text>
          <Text style = { this.state.fontLoaded ? styles.findText : styles.findTextElse }>A GAME</Text>
        </View>
        <View style = {{ paddingTop: '7.5%' }}>
          <View style = { styles.time }>
            <View style = { styles.timeTop }>
              <Image style = {{ height: 40, width: 40 }} source={require('./../assets/images/time.png')}/>
              <Text style = { this.state.fontLoaded ? styles.headerText : styles.headerTextElse }>Time</Text>
            </View>
            <View style = {{ height: 3, width: '100%', backgroundColor: '#fff' }}>
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
        <View style = {{ paddingTop: '3%' }}>
          <View style = { styles.place }>
            <View style = { styles.placeTop }>
              <Image style = {{ height: 40, width: 40 }} source = { require('./../assets/images/place.png') }/>
              <Text style = { this.state.fontLoaded ? styles.headerText : styles.headerTextElse }>Place</Text>
            </View>
            <View style = {{ height: 5, width: '100%', backgroundColor: '#fff' }}>
            </View>
            <View style = { styles.placeBottom }>
            <FlatList
              data = {[
                { key: 'Alpha Phi Alpha', index: 1 },
                { key: 'Alpha Chi', index: 2 },
                { key: 'Alpha Theta', index: 3 },
                { key: 'Alpha Phi', index: 4 },
                { key: 'Alpha Pi Omega', index: 5 },
                { key: 'AXiD', index: 6 },
                { key: 'Beta', index: 7 },
                { key: 'BG', index: 8 },
                { key: 'Chi Delt', index: 9 },
                { key: 'Chi Gam', index: 10 },
                { key: 'EKT', index: 11 },
                { key: 'GDX', index: 12 },
                { key: 'Heorot', index: 13 },
                { key: 'Kappa', index: 14 },
                { key: 'KD', index: 15 },
                { key: 'KDE', index: 16 },
                { key: 'Lambda Upsilon Lambda', index: 17 },
                { key: 'Phi Delt', index: 18 },
                { key: 'Phi Tau', index: 19 },
                { key: 'Psi U', index: 20 },
                { key: 'Sig Ep', index: 21 },
                { key: 'Sig Nu', index: 22 },
                { key: 'Sigma Delt', index: 23 },
                { key: 'Sigma Lambda Upsilon', index: 24 },
                { key: 'Tabard', index: 25 },
                { key: 'TDX', index: 26 },
                { key: 'Zete', index: 27 },
              ]}
                renderItem = {({ item }) => (
                  <View style = {{ justifyContent: 'space-around', paddingLeft: 5, paddingTop: 2, paddingBottom: 2, flexDirection: 'row' }}>
                    <View style = { styles.optionButtons }>
                      <Text style = { this.state.fontLoaded ? styles.optionsTextPlace : styles.optionsTextPlaceElse }>{ item.key }</Text>
                    </View>
                    <View style = { styles.optionButtons }>
                      <Text style = { this.state.fontLoaded ? styles.optionsTextPlace : styles.optionsTextPlaceElse }>{ item.key }</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: 10 }}>
          <Text style = { this.state.fontLoaded ? styles.cancelText : styles.cancelTextElse }>Cancel</Text>
          <View style = { styles.postButton }>
            <Text style = { this.state.fontLoaded ? styles.postButtonText : styles.postButtonTextElse }>Post!</Text>
          </View>
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
    paddingTop: '5%'
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
  },
  findText: {
    fontFamily: 'double-bubble-shadow',
    fontSize: 50,
    color: 'white',
    width: '75%',
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
    height: 145,
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
    height: 80,
  },
  timeTop: {
    backgroundColor: '#F2994A',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
