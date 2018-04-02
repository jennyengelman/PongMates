import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export default class CreateScreen extends React.Component {
  render() {
    return (
      <View style = { styles.container }>
        <View style = { styles.create }>
          <Text style = {{ fontFamily: 'Cochin', fontSize: 50, color: 'white', width: '75%' }}>CREATE</Text>
          <Text style = {{ fontFamily: 'Cochin', fontSize: 50, color: 'white', width: '75%' }}>A GAME</Text>
        </View>
        <View style = {{ paddingTop: '7.5%' }}>
          <View style = { styles.time }>
            <View style = { styles.timeTop }>
              <Image style = {{ height: 40, width: 40 }} source={require('./../assets/time.png')}/>
              <Text style = { styles.header }>Time</Text>
            </View>
            <View style = {{ height: '4%', width: '100%', backgroundColor: '#fff' }}>
            </View>
            <View style = { styles.timeBottom }>
              <View style = { styles.optionButtons }>
                <Text style = { styles.optionsTextTime }>Now</Text>
              </View>
              <View style = { styles.optionButtons }>
                <Text style = { styles.optionsTextTime }>Later</Text>
              </View>
            </View>
          </View>
        </View>
        <View style = {{ paddingTop: '3%' }}>
          <View style = { styles.place }>
            <View style = { styles.placeTop }>
              <Image style = {{ height: 40, width: 40 }} source = { require('./../assets/place.png') }/>
              <Text style = { styles.header }>Place</Text>
            </View>
            <View style = {{ height: '4%', width: '100%', backgroundColor: '#fff' }}>
            </View>
            <View style = { styles.placeBottom }>
              <FlatList
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
                  <View style = {{ paddingLeft: 5 }}>
                    <View style = { styles.optionButtons }>
                      <Text style = { styles.optionsTextPlace }>{ item.key }</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: 10 }}>
          <Text style = {{ color: '#F2994A', fontSize: 30, fontFamily: 'Cochin', paddingLeft: 15 }}>Cancel</Text>
          <View style = { styles.postButton }>
            <Text style = { styles.postButtonText }>Post!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '70%',
    backgroundColor: '#C2515B',
    paddingTop: '5%'
  },
  create: {
    backgroundColor: '#FFC928',
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
    paddingLeft: 20,
  },
  header: {
    color: '#545454',
    fontSize: 35,
    fontFamily: 'Cochin',
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
    marginTop: 5,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    paddingLeft: 20,
  },
  optionsTextPlace: {
    fontSize: 18,
    fontFamily: 'Cochin',
    color: '#545454',
  },
  optionsTextTime: {
    fontSize: 30,
    fontFamily: 'Cochin',
    color: '#545454',
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
    fontFamily: 'Cochin',
    fontSize: 30,
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
