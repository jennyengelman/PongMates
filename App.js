import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingTop: 30}}>
          <View>
            <View style={styles.pongRoundedRectangle}>
              <Text style={styles.pongMatesText}>Pong</Text>
            </View>
          </View>
          <View style={{paddingTop: 30}}>
            <View style={styles.matesRoundedRectangle}>
              <Text style={styles.pongMatesText}>Mates</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pongRoundedRectangle: {
    backgroundColor: 'orange',
    width: 220,
    height: 120,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  matesRoundedRectangle: {
    backgroundColor: 'yellow',
    width: 240,
    height: 120,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  pongMatesText: {
    paddingTop: 20,
    padding: 5,
    fontFamily: 'Cochin',
    fontSize: 50,
    alignItems: 'center'
  },
});
