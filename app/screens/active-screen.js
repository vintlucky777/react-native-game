import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

import {screenNames} from 'app/constants';

import QuestsScreen from './quests';
import PlayerScreen from './player';
import Onboarding from './onboarding';

const styles = StyleSheet.create({
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  emptyScreenText: {
    color: 'white',
    fontSize: 30,
  },
})

class ActiveScreen extends React.Component {
  _getActiveScreen() {
    switch (this.props.screenName) {
      case screenNames.ONBOARDING:
        return <Onboarding/>;

      case screenNames.PLAYER:
        return <PlayerScreen/>;

      case screenNames.QUESTS:
        return <QuestsScreen/>;

      default:
        return (
          <View style={styles.emptyScreen}>
            <Text style={styles.emptyScreenText}>
              Screen not defined!
            </Text>
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#494841'}}>
        {this._getActiveScreen()}
      </View>
    );
  }
}

const stateToProps = (state) => ({
  screenName: state.screens.activeScreen,
})

export default connect(stateToProps)(ActiveScreen);
