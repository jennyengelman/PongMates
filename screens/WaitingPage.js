import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import PongButton from './../components/PongButton';

export class WaitingScreen extends React.Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
      'source-sans': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
      'source-sans-regular': require('./../assets/fonts/SourceSansPro-Regular.ttf'),
    });
    this.setState({ fontLoaded: true }) ;
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
                Name: {'\n'}Place: {'\n'}Time:
              </Text>
          </View>
          <PongButton
            font={ this.state.fontLoaded }
            text={ 'Delete\nRequest' }
            navigation={ this.props.navigation }
            destination={ 'Create' }
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
    flex: .6,
    backgroundColor:'#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  waitingFont: {
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: 10,
    margin: 10,
    fontFamily: 'bubble-body',
  },
  bottomContainer: {
    borderTopColor: '#FFC928',
    borderTopWidth: 15,
    flex: .4,
    backgroundColor: '#F2994A',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  tabFontStyle: {
    fontWeight: 'bold',
    color: '#545454',
    fontFamily: 'source-sans',
    fontSize: 16
  },
  tabStyle: {
    width: 140,
    height: 35,
    backgroundColor: '#FFC928',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    height: 150,
    width: 250,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  fontStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    fontFamily: 'source-sans',
    marginBottom: 5,
  },
  deleteFontStyle:{
    fontWeight: 'bold',
    fontSize: 15,
    color: '#545454',
    fontFamily: 'source-sans',
    textAlign: 'center',
    width: '100%'
  },
 });
