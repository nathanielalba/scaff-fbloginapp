import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export class Signup extends Component {
  constructor(props) {
    super(props)

    this.navigateFacebook = this.navigateFacebook.bind(this)
    this.navigateEmail = this.navigateEmail.bind(this)
    this.login = this.login.bind(this)
  }

  navigateEmail() { this.props.navigator.push({ title: 'emailsignup' }) }

  navigateFacebook() { this.props.navigator.push({ title: 'fbsignup' }) }

  login() { this.props.navigator.push({ title: 'login'}) }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1.5 }} />
        <View style={styles.mainContent}>
          <TouchableOpacity
            onPress={this.navigateFacebook}
            style={[styles.button, styles.facebookButton]}>
            <Text style={styles.buttonText}>Sign up with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.navigateEmail}
            style={[styles.button, styles.emailButton]}>
            <Text style={styles.buttonText}>Sign up with Email</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.login}>
            <Text>Already have an account? Log In</Text>
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
  mainContent: {
    flex: 1,
    justifyContent: 'space-around'
  },
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.75,
    height: 55
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  facebookButton: {
    backgroundColor: '#3B5998'
  },
  emailButton: {
    backgroundColor: 'black'
  }
})

export default Signup
