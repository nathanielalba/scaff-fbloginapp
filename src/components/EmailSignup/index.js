import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';


const { width } = Dimensions.get('window')

const radioProps = [
  { label: 'Male', value: 0 },
  { label: 'Female', value: 1 }
]

export class EmailSignup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      date: moment().format('YYYY-MM-DD')
    }

    this.navigateFacebook = this.navigateFacebook.bind(this)
  }

  navigateFacebook() { this.props.navigator.push({ title: 'fbsignup'}) }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5 }} />
        <View style={styles.main}>
          <TextInput
            style={styles.input}
            placeholder='Username'
            />
          <TextInput
            style={styles.input}
            placeholder='Password'
            />
          <TextInput
            style={styles.input}
            placeholder='Email'
            />
          <TextInput
            style={styles.input}
            placeholder='Confirm Email'
            />
          <Text>Date of Birth</Text>
          <DatePicker
            date={this.state.date}
            mode='date'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            showIcon={false}
            onDateChate={(date) => { this.setState({ date })}} />
          <RadioForm
            radio_props={radioProps}
            initial={this.state.value}
            formHorizontal={true}
            animation={true}
            labelHorizontal={true}
            onPress={value => { this.setState({ value }) }} />
          <TouchableOpacity
            style={styles.signup}
            onPress={this.signup}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={this.navigateFacebook}>
            <Text style={styles.facebookText}>Sign up with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFF0'
  },
  main: {
    flex: 2,
    justifyContent: 'space-around'
  },
  signup: {
    width: width * 0.35,
    height: 30,
    borderRadius: 8,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupText: {
    color: 'white',
    fontWeight: '500'
  },
  input: {
    backgroundColor: 'white',
    height: 55,
    width: width * 0.8,
    borderRadius: 10
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5
  },
  facebookButton: {
    backgroundColor: '#3B5998',
    width: width * 0.75,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebookText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  }
})

export default EmailSignup
