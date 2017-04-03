import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {actions} from 'app/store/store';

import Button from 'app/common/button';
import PlayerStats from 'app/components/player-stats';
import {getPlayerClassImage} from 'app/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#353A3B',
    flex: 0,
    paddingTop: 20,
  },
  content: {
    backgroundColor: '#4A5755',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footer: {
    backgroundColor: '#4D433F',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    padding: 20,
  },
  playerStats: {
    flex: 1,
  },
  button: {
    borderWidth: 2,
    backgroundColor: '#3B9D39',
    borderColor: '#3D7D37',
    width: 200,
    height: 60,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  playerImage: {
    width: 280,
    height: 280,
  }
});

class PlayerScreen extends Component {
  render() {
    const {character, showQuestsScreen} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Button onPress={showQuestsScreen} style={{margin: 10}}>
          Back to quests
        </Button>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.playerImage}
            source={getPlayerClassImage(character)}
            resizeMode='contain'
          />
        </View>
        <View style={styles.footer}>
          <PlayerStats style={styles.playerStats}/>
        </View>
      </View>
    );
  }
}

const stateToProps = (state) => ({
  character: state.player.character,
})

const actionsToProps = () => ({
  showQuestsScreen: actions.screens.showQuestsScreen,
})

export default connect(stateToProps, actionsToProps)(PlayerScreen);
