import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style = {styles.topContainer}/>
        <View style = {styles.bottomContainer}>
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
    height: 70,
    width: 110,
    backgroundColor: '#FFC928',
    borderRadius: 15,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteFontStyle:{
    fontWeight: 'bold',
    color: '#545454',
  },
});
