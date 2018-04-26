import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class YearButton extends React.Component {
  state = { fontLoaded: false };
  async componentDidMount() {
    await Font.loadAsync({
      'source-sans-pro': require('./../assets/fonts/SourceSansPro-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={ () => navigate(this.props.destination) }
        style = { styles.yearButtons }
      >
        <Text style = { this.state.fontLoaded ? styles.optionsTimeText : styles.optionsTimeTextElse }>18</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  optionsTimeText: {
    fontSize: Dimensions.get('window').height / 25,
    fontFamily: 'source-sans-pro',
    color: '#545454',
    textAlign: 'center',
  },
  optionsTimeTextElse: {
    fontSize: 30,
    color: '#545454',
    textAlign: 'center',
  },
  yearButtons: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '180%',
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  yearButtonsUn: {
    borderColor: '#545454',
    borderRadius: 50,
    borderWidth: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: '180%',
    height: 40,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
});
