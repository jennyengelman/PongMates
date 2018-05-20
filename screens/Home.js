import React, { Component } from 'react';
import { Picker, StyleSheet, Text, View, Button, Alert, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import Logo from './../components/Logo';
import Modal from 'react-native-modal';
import ModalButton from './../components/ModalButton';
import firebase from 'firebase';
import { generateUserKey, createUser } from './../services/user-actions'

export class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
      text: '',
      visibleModal: null,
      id: null,
      year: 'freshman',
      user: {},
    };
  }
_renderModalContent = () => (
  <View style={ styles.modalContent }>
    <View style = {{ alignItems: 'center', justifyContent: 'center', flex: .2 }}>
      <Text style = { styles.modalTextStyle }>Select Your Year</Text>
        <Picker
          selectedValue={ this.state.year }
          style={{ height: 20, width: 100 }}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({year: itemValue})}}>
          <Picker.Item label="'21" value="freshman" />
          <Picker.Item label="'20" value="sophomore" />
          <Picker.Item label="'19" value="junior" />
          <Picker.Item label="'18" value="senior" />
        </Picker>
      </View>
    <View style = {{ flex: .2 }}>

    {this.renderModalButton()}
    </View>
  </View>
);

renderModalButton = () => {
  if (this.state.id) {
    return <ModalButton label = { 'Continue' } user = {{ id: this.state.id, name: this.state.text, year: this.state.year }}
      action = { () => this.modalAction(this.state.id, this.state.text, this.state.year) } navigation = {this.props.navigation} />
  } else {
    return null
  }
}

  modalAction = (id, name, year) => {
    createUser({ id, name, year })
    this.setState({ visibleModal: null });
  }

  async componentDidMount() {
    await Font.loadAsync({
      'double-bubble-shadow': require('./../assets/fonts/Double_Bubble_shadow.otf'),
      'source-sans-pro-bold': require('./../assets/fonts/SourceSansPro-Bold.ttf'),
      'bubble-body': require('./../assets/fonts/Bubbleboddy-FatTrial.ttf'),
      'source-sans-pro': require('./../assets/fonts/source-sans-pro.semibold.ttf'),
      'source-sans-regular': require('./../assets/fonts/SourceSansPro-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    console.log(this.props.navigation.params)
    const { navigate } = this.props.navigation;
    return (
      <View style = { styles.container }>
        <View style = {{ backgroundColor: '#C2515B', height: '30%', justifyContent: 'center' }}>
          <Logo font={ this.state.fontLoaded }/>
        </View>
        <View style = {{ backgroundColor: '#C2515B', height: '40%' }}>
          <View style = {{ alignItems: 'center', paddingTop: '5%' }}>
            <View style = { styles.homeRectangle }>
              <View style = { styles.nameContainer }>
                <TextInput
                  style = { this.state.fontLoaded ? styles.nameInput : styles.nameInputElse }
                  placeholder = "Your Name"
                  onChangeText = { (text) => this.setState({ text }) }
                />
              </View>
            </View>
          </View>

        </View>

        <View style = {{ height: '30%', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: Dimensions.get('window').height / 20 }}>
          <TouchableOpacity onPress={() => {
            generateUserKey().then((key) => {
              myKey = key
              this.setState({ id: myKey })
            })
            this.state.visibleModal = 1
          }}>
            <Text style = { this.state.fontLoaded ? styles.modalTextStyle : styles.nameInputElse }>tap to begin</Text>
          </TouchableOpacity>
          <Modal isVisible={this.state.visibleModal === 1}>
            {this._renderModalContent()}
          </Modal>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2994A',
  },
  homeRectangle: {
    backgroundColor: '#93E1FA',
    height: Dimensions.get('window').height * .50,
    width: Dimensions.get('window').width * .80,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height / 50,
    borderColor: '#FFFFFF',
    borderWidth: 7,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
  },
  matesTextElse: {
    fontSize: 60,
    color: '#FFFFFF',
    paddingLeft: 3,
  },
  matesTextElse: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    marginLeft: -35,
  },
  matesTextElse: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    marginLeft: -35,
  },
  nameContainer: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').width / 7,
    backgroundColor: '#FFC928',
    borderColor: '#FFFFFF',
    borderWidth: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height / 45,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
  },
  nameInput: {
    width: '80%',
    color: '#FFFFFF',
    fontFamily: 'source-sans-pro',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  nameInputElse: {
    width: '80%',
    color: '#FFFFFF',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  nextText: {
    fontFamily: 'source-sans-pro',
    textAlign: 'center',
    color: '#696969',
  },
  nextTextElse: {
    textAlign: 'center',
    color: '#696969',
  },
  pongContainer: {
    backgroundColor: '#FFC928',
    width: 220,
    height: 110,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 5,
    marginLeft: -5,
  },
  nextText: {
    fontFamily: 'source-sans-pro-bold',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height / 30,
  },
  nextTextElse: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height / 30,
  },
  selfieText: {
    position: 'absolute',
    alignSelf: 'center',
    width: Dimensions.get('window').width * .4,
    fontSize: Dimensions.get('window').width / 15,
    color: '#696969',
    fontFamily: 'source-sans-pro-bold',
    textAlign: 'center',
  },
  selfieTextElse: {
      position: 'absolute',
      alignSelf: 'center',
      width: Dimensions.get('window').width * .4,
      fontSize: Dimensions.get('window').width / 15,
      color: '#696969',
      textAlign: 'center',
  },
  button: {
    backgroundColor: '#F2994A',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  modalTextStyle: {
    fontSize: 28,
    fontFamily: 'source-sans-pro-bold',
  },
  modalContent: {
   backgroundColor: 'white',
   paddingTop: 22,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 4,
   borderColor: 'rgba(0, 0, 0, 0.1)',
   justifyContent: 'space-around',
   flex: .6
 },
});
