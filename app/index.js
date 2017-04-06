/**
 * Questime
 * https://github.com/vintlucky777/questime
 * @flow
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store, initialize} from 'app/store/store';

import ActiveScreen from 'app/screens/active-screen';
import ActiveModal from 'app/modals/active-modal';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar
            barStyle='light-content'
            translucent={true}
            backgroundColor='rgba(0,0,0,0.2)'
          />
          <ActiveScreen/>
          <ActiveModal/>
        </View>
      </Provider>
    );
  }
}

initialize();
