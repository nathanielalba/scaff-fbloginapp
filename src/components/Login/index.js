import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export class Login extends Component {
  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
    this.forgotPassword = this.forgotPassword.bind(this)
    this.signup = this.signup.bind(this)
  }

  login() {

  }

  forgotPassword() {
    console.log('Not yet implemented')
  }

  signup() { this.props.navigator.push({ title: 'signup' }) }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={styles.feedback}>
          <TextInput
            placeholder='Username'
            autoFocus
            keyboardType='email-address'
            returnKeyType='next'
            style={styles.input} />
          <TextInput
            placeholder='Password'
            secureTextEntry
            style={styles.input} />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.login}>
            <Text style={styles.submitText}>Let's go!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.forgotPassword}>
            <Text>Forgot password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.signup}>
            <Text>New User Sign Up</Text>
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
  feedback: {
    flex: 1.25,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    width: width * 0.5,
    backgroundColor: '#2980b9'
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  },
  input: {
    borderRadius: 10,
    textAlign: 'center',
    height: 60,
    width: width * 0.75,
    backgroundColor: 'white'
  }
})

export default Login
