import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Font } from 'expo';

export default class YearButton extends React.Component {
  render() {
    return (
      <View style = {{ flexDirection: 'row', marginRight: Dimensions.get('window').height / 30 }}>
        <FlatList
          numColumns={2}
          //scrollEnabled={false}
          data = {[
            { key: this.props.item },
          ]}
          renderItem = {({ item }) => (
            <TouchableOpacity
              onPress={() => { this.props.pressed = !this.props.pressed }}
              //style = { buttonPressed ? styles.yearButtons : styles.yearButtonsUn }
            >
            <View style = {{ paddingLeft: 120, paddingTop: 2, paddingBottom: 2 }}>
              <View style = { styles.yearButtons }>
                <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>{this.props.year}</Text>
              </View>
              </View>
            </TouchableOpacity>
          )}
        />
        {/*}<TouchableOpacity
          onPress={() => { this.props.pressed = !this.props.pressed }}
          //style = { buttonPressed ? styles.yearButtons : styles.yearButtonsUn }
        >
          <View style = { styles.yearButtons }>
            <Text style = { this.props.font ? styles.optionsTimeText : styles.optionsTimeTextElse }>{this.props.year}</Text>
          </View>
        </TouchableOpacity>*/}
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
    width: Dimensions.get('window').width / 5,
    height: 40,
    //marginRight: 10,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    //borderTopRightRadius: 7,
    //borderBottomRightRadius: 7,
    borderColor: '#FFFFFF',
    borderWidth: 5,
  },
  yearButtonsUn: {
    borderColor: '#545454',
    borderWidth: 5,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width / 5,
    height: 40,
    //marginRight: 10,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
});
