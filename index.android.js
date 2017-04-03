import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from 'questime/app/index.js';

export default class questime extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('questime', () => questime);
