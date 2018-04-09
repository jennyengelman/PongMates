import React from 'react';
import { StyleSheet, Text, View, Image, Fonts, Button, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
//import HomeButton from './../components/HomeButton';
//import AboutButton from './../components/AboutButton';

export class SelectionScreen extends React.Component {
  static navigationOptions = {header: null };
  state = {
    fontLoaded: false,
   };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
     });
    this.setState({ fontLoaded: true }) ;
   }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style = { styles.container }>
          <View style = {{ height: '10%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'flex-start' }}>
            <TouchableOpacity onPress={() =>
              navigate('Home')
            }>
              <View style = { styles.topButtons }>
                <Image source = { require('./../assets/images/profile.png') } style = { styles.image }/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
              navigate('About')
            }>
              <View style = { styles.topButtons }>
                <Text style = { this.state.fontLoaded ? styles.faqButton : styles.anything }>
                  ?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        <View style = {{  height: '90%', justifyContent: 'center', alignItems: 'center' }}>
          <View style = {{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style = { styles.postButton }>
              <TouchableOpacity onPress={() =>
                navigate('Create')
              }>
                <Text style = { this.state.fontLoaded ? styles.postFontStyle : styles.anything }>
                  CREATE A GAME
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() =>
              navigate('Find')
            }>
              <View style = { styles.findButton }>
                <Text style = { this.state.fontLoaded ? styles.findFontStyle : styles.anything }>
                  FIND A GAME
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
   }
 }

const styles = StyleSheet.create({
  postFontStyle: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginLeft: 10,
    paddingRight: 25,
    fontFamily: 'double-bubble-shadow'
   },
  findFontStyle: {
    color: 'white',
    fontSize: 60,
    textAlign: 'left',
    marginLeft: 15,
    paddingLeft: 10,
    fontFamily: 'double-bubble-shadow'
   },
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#F2994A',
   },
  faqButton: {
    fontSize: 80,
    color: '#C2515B',
    fontFamily: 'double-bubble-shadow',
    paddingRight: 1
   },
  topButtons: {
    width: 120,
    height: 130,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
   },
  image: {
    width: 70,
    height: 70,
   },
  postButton: {
    marginBottom: 30,
    marginTop: 20,
    width: '80%',
    height: 250,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: 'white',
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    paddingTop: 50,
    backgroundColor:'#FFC928',
    shadowColor: 'gray',
    shadowOpacity: .8,
    shadowOffset: { width: 0, height: 5 }
   },
  findButton: {
    width: 300,
    height: 250,
    backgroundColor:'#93E1FA',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: 'white',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    paddingTop: 50,
    marginTop: 22,
    shadowColor: 'gray',
    shadowOpacity: .8,
    shadowOffset: { width: 6, height: 6 }
   }
 });
