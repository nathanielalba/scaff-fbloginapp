import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { default as Button } from '../Button'

export class Splash extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.mainText}>Prove your point.</Text>
          <Text style={styles.mainText}>Challenge your beliefs</Text>
          <Text style={styles.mainText}>Open your mind.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            navigator={this.props.navigator}
            style={styles.lightButton}
            route='login'>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Button>
          <Button
            navigator={this.props.navigator}
            style={styles.darkButton}
            route='signup'>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Button>
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
  lightButton: {
    backgroundColor: '#3498db'
  },
  darkButton: {
    backgroundColor: '#2980b9'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 18
  }
})

export default Splash
