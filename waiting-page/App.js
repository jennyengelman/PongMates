import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style = {styles.topContainer}>
          
          <Text style = {styles.waitingFont}>waiting...</Text>
        </View>
        <View style = {styles.bottomContainer}>
        <View style = {styles.tabStyle}>
          <Text style = {{fontWeight: 'bold', color: '#545454'}}>Your Game Details</Text>
        </View>
          <View style = {styles.innerContainer}>
            <Text style = {styles.fontStyle}>Name:</Text>
            <Text style = {styles.fontStyle}>Place:</Text>
            <Text style = {styles.fontStyle}>Time:</Text>
          </View>
          <View style = {styles.deleteButton}>
            <Text style = {styles.deleteFontStyle}>Delete</Text>
            <Text style = {styles.deleteFontStyle}>Post</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background:{
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
    fontSize: 22,
    margin: 7,
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
  tabStyle:{
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
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
  },
  deleteButton: {
    height: 60,
    width: 110,
    backgroundColor: '#FFC928',
    borderRadius: 15,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteFontStyle:{
    fontWeight: 'bold',
    color: '#545454',
  },
});
