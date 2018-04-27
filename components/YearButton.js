import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class YearButton extends React.Component {
  render() {
    return (
      <View style = {{ flexDirection: 'row', width: '13%' }}>
        <TouchableOpacity style = { styles.yearButtons }>
          <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.yearButtons }>
          <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>20</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.yearButtons }>
          <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>19</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.yearButtons }>
          <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>18</Text>
        </TouchableOpacity>
      </View>
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
    width: '170%',
    height: 40,
    marginRight: 10,
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
