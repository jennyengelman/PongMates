import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Font } from 'expo';


export class Congrats extends React.Component {
  state = {fontLoaded: false};
  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    });
    this.setState({fontLoaded: true});
  }
  render() {
    return (
      <View style={{flex: 1}}>
      {
        this.state.fontLoaded ? (
        <View style={{flexDirection: 'column'}}>
          <View style={{height: '58%', alignItems: 'center'}}>
            <Text style={styles.congratsText}>Its a</Text>
            <Text style={styles.congratsText}>Match!</Text>
            <Image source={require('./assets/image.png')}
              style={{
                tintColor: 'black',
                height: '40%',
                width: '40%',
                marginBottom: 10,
              }}
            />
            <Image source={require('./assets/person.png')}
              style={{
                height: '15%',
                width: '15%'
              }}
            />
          </View>
          <View style={styles.congratsContainer}>
              <View style={styles.congratsBox}>
                  <Text style={styles.congratsInfo}>
                  Name: Jenny{"\n"}Place: Phi Delt{"\n"}Time: Now
                  </Text>
              </View>
          </View>
          <View style={[styles.bottomButton, {backgroundColor: '#FFC928'}]}>
            <Button
              //onPress={idk}
              title="tap to continue"
              color="white"
              fontWeight="bold"
            />
          </View>
        </View>
        ) : null
      }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  congratsContainer: {
    width: '100%',
    height: '36%',
    backgroundColor: '#F2994A',
    borderTopWidth: 10,
    borderColor: '#FFC928',
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsBox: {
    width: '80%',
    height: '70%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  congratsText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'double-bubble-shadow',
  },
  congratsInfo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4F4F4F',
    margin: 25,
    fontFamily: 'source-sans-pro',
  },
  bottomButton: {
    width: '100%',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
