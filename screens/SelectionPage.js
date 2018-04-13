import React from 'react';
import { StyleSheet, Text, View, Image, Fonts, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Font  } from 'expo';

export class SelectionScreen extends React.Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: false,
   };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro-bold': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
     });
    this.setState({ fontLoaded: true }) ;
   }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style = { styles.container }>
          <View style = {{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'flex-start' }}>
            <TouchableOpacity onPress={() =>
                navigate('Home')
              }
            >
              <View style = { styles.topButtons }>
                <Image source = { require('./../assets/images/profile.png') } style = { styles.image }/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
                navigate('About')
              }
            >
              <View style = { styles.topButtons }>
                <Text style = { this.state.fontLoaded ? styles.faqButton : styles.anything }>
                  ?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        <View style = {{  flex: 4 }}>
          <View style = {{ height: '50%', width: '100%' }}>
            <TouchableOpacity onPress={() =>
                navigate('Create')
              } style = {{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
            >
              <View style = { styles.postButton }>
                  <Text style = { this.state.fontLoaded ? styles.postFontStyle : styles.anything }>
                    CREATE A GAME
                  </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style = {{ height: '50%', width: '100%' }}>
            <TouchableOpacity onPress={() =>
              navigate('Find')}
              style = {{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
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
    color: '#FFFFFF',
    fontSize: Dimensions.get('window').width / 6,
    textAlign: 'right',
    marginLeft: Dimensions.get('window').width / 10,
    paddingRight: 25,
    fontFamily: 'double-bubble-shadow',
   },
  findFontStyle: {
    color: '#FFFFFF',
    fontSize: Dimensions.get('window').width / 6,
    textAlign: 'left',
    marginRight: Dimensions.get('window').width / 10,
    paddingLeft: 25,
    fontFamily: 'double-bubble-shadow',
   },
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#F2994A',
   },
  faqButton: {
    fontSize: Dimensions.get('window').width / 4,
    color: '#C2515B',
    fontFamily: 'double-bubble-shadow',
    paddingRight: 1,
   },
  topButtons: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 6,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: .3,
    shadowOffset: { width: 0, height: 5 }
   },
  image: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
   },
  postButton: {
    justifyContent: 'center',
    width: '80%',
    height: '70%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#FFFFFF',
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    backgroundColor:'#FFC928',
    shadowColor: '#000000',
    shadowOpacity: .4,
    shadowOffset: { width: 0, height: 5 },
   },
  findButton: {
    justifyContent: 'center',
    width: '80%',
    height: '70%',
    backgroundColor:'#93E1FA',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: '#FFFFFF',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    shadowColor: '#000000',
    shadowOpacity: .4,
    shadowOffset: { width: 6, height: 6 },
   }
 });
