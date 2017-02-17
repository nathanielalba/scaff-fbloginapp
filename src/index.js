import React, { Component } from 'react'
import { Navigator } from 'react-native'

// routes
import routes from './routes';

// components
import { default as Splash } from './components/Splash'
import { default as Login } from './components/Login'
import { default as Signup } from './components/Signup'
import { default as EmailSignup } from './components/EmailSignup'
import { default as FBSignup } from './components/FBSignup'


export class fbloginapp extends Component {
  constructor(props) {
    super(props)

    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator) {
    switch (route.title) {
      case 'splash':
        return <Splash navigator={navigator} />;
        // return <Signup navigator={navigator} />;
        // return <Login navigator={navigator} />;
        // return <EmailSignup navigator={navigator} />;
      case 'signup':
        return <Signup navigator={navigator} />;
      case 'emailsignup':
        return <EmailSignup navigator={navigator} />;
      case 'fbsignup':
        return <FBSignup navigator={navigator} />;
      case 'login':
        return <Login navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene} />
    )
  }
}

export default fbloginapp
