import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import PongButton from './../components/PongButton';
import { Font } from 'expo';

export class MeetMatch extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };
  state = { fontLoaded: true };
  render(){
    return(
      <View style = { styles.container }>
        <Text style = { this.state.fontLoaded ? styles.meetMatchText : styles.anything }>
          MEET YOUR MATCH!
        </Text>
        <View style = { styles.detailsContainer }>
          <Image source = { require('./../assets/match.png') } style = { styles.matchImageStyle }/>
          <View style = { styles.details }>
            <Text style = { this.state.fontLoaded ? styles.detailText : styles.anything }>
              Name:{'\n'}Place:
            </Text>
          </View>
        </View>

        <PongButton
         font = { this.state.fontLoaded }
         text = { 'Cancel' }
         navigation = { this.props.navigation }
         destination = { 'Selection' }
         action = { () => {} }
         />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F2994A',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  meetMatchText: {
    marginTop: '20%',
    fontFamily: 'double-bubble',
    textAlign: 'center',
    fontSize: 60,
    color: '#fff'
  },
  detailsContainer: {
    width: '85%',
    height: '50%',
    borderRadius: 25,
    borderWidth: 8,
    borderColor: '#fff',
    backgroundColor: '#93E1FA',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  matchImageStyle: {
    width: Dimensions.get('window').height / 4,
    height: Dimensions.get('window').height / 4,
  },
  details: {
    width: '70%',
    height: '38%',
    borderRadius: 25,
    marginBottom: '10%',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  detailText: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height / 35,
    color: '#4F4F4F',
    fontFamily: 'source-sans-pro-semibold',
    marginLeft: '7%'
  },
  cancelButton: {
    width: '30%',
    height: '15%',
    marginBottom: '15%',
    borderRadius: 20,
    backgroundColor: '#FFC928',
    justifyContent: 'center'
  },
  anything: {
    fontSize: 65,
    padding: 30,
  }
});
