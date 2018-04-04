import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {

  render(){
    return(
      <View style = { styles.container }>
        <View style = { styles.topContainer }>
          <Text style = { styles.matchText }>
            MATCH
          </Text>
        </View>

        <View style = { styles.bottomContainer }>
          <View style = { styles.matchDetails }>
            <Text style = { styles.detailsStyle}>
              Name: {'\n\n'}Place: {'\n\n'}Time:
            </Text>
          </View>
        </View>

        <View style = { styles.continue }>
          <Text style = { styles.continueText }>
            tap to continue
          </Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
  },
  topContainer: {
    flex: .6,
    backgroundColor:'#fff',
    justifyContent: 'center'
  },
  matchText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30
  },
  bottomContainer: {
    flex: .33,
    backgroundColor: '#F2994A',
    borderTopColor: '#FFC928',
    borderTopWidth: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  matchDetails: {
    width: '70%',
    height: '55%',
    backgroundColor: '#fff',
    borderRadius: 23,
    justifyContent: 'center',
  },
  detailsStyle: {
    fontWeight: 'bold',
    marginLeft: 12,
    fontSize: 20,
    color: '#4F4F4F',
  },
  continue: {
    flex: .07,
    backgroundColor: '#FFC928',
    justifyContent: 'center'
  },
  continueText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
    color: '#fff'
  }
});
