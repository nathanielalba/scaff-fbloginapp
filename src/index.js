import React, { Component } from 'react'
import { Navigator } from 'react-native'

// routes
import routes from './routes';

// components
import { default as Login } from './components/Login'


export class fbloginapp extends Component {
  constructor(props) {
    super(props)

    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator) {
    switch (route.title) {
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
