import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window')


export class Button extends Component {
  constructor(props) {
    super(props)

    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    this.props.navigator.push({
      title: this.props.route
    })
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[styles.button, this.props.style]} >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.5,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default Button
