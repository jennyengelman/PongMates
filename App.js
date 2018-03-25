import React from 'react';
import { StyleSheet, Text, View, Image, Fonts, Button } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./assets/fonts/Double_Bubble_shadow.otf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style = {styles.topButtons}>
            <Image source = {require('./assets/profile.png')} style = {styles.image}/>
          </View>
          <View style = {styles.topButtons}>
            <Text style = {styles.faqButton}>?</Text>
          </View>
        </View>

        <View style = {{justifyContent: 'center'}}>

          <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Logo font = {this.state.fontLoaded}> </Logo>
            <View style = {styles.postButton}>
            {
              this.state.fontLoaded ? (
                <Text style = {styles.postFontStyle}>Create a Game</Text>

              ) : null
            }
            </View>
          </View>
          <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View style = {styles.findButton}>
              <Text style = {styles.findFontStyle}>Find a</Text>
              <Text style = {styles.findFontStyle}>Game</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postFontStyle: {
    color: 'white',
    fontSize: 45,
    textAlign: 'left',
    marginLeft: 15,
  },
  findFontStyle:{
    color: 'white',
    fontSize: 45,
    textAlign: 'left',
    marginLeft: 15,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#F2994A',
  },
  faqButton: {
    fontSize: 70,
    color: '#C2515B',
  },
  topButtons: {
    width: 120,
    height: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
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
    borderWidth: 5,
    paddingTop: 50,
    backgroundColor:'#FFC928',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
  },
  findButton:{
    width: 300,
    height: 250,
    backgroundColor:'#93E1FA',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: 'white',
    borderWidth: 5,
    paddingTop: 50,
    shadowColor: 'gray',
    shadowOpacity: .5,
  }
});
