import React from 'react';
import { StyleSheet, Text, View, Image, Fonts, Button } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
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

          <View style = {styles.postButton}>
            <Text style = {styles.buttonText}>Post a Game</Text>
          </View>

          <View style = {styles.findButton}>
            <Text style = {styles.buttonText}>Find a Game</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#F2994A',
  },
  faqButton: {
    fontSize: 70,
  },
  topButtons: {
    width: 130,
    height: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 40,
  },
  image:{
    width: 70,
    height: 70,
  },
  postButton: {
    marginBottom: 30,
    marginTop: 20,
    width: 300,
    height: 250,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 5,
    paddingTop: 50,
    backgroundColor:'#FFC928',
  },
  findButton:{
    width: 300,
    height: 250,
    backgroundColor:'#93E1FA',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 5,
    paddingTop: 50,
  }
});
