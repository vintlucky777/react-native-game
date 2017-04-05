import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {actions} from 'app/store/store';
import _ from 'lodash';

import Button from 'app/common/button';
import {Row, Col} from 'app/common/layout';
import PlayerStats from 'app/components/player-stats';
import {getPlayerClassImage} from 'app/utils';

import {images} from 'assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui: {
    flex: 1,
    backgroundColor: 'rgba(70,70,70,0.7)',
  },
  header: {
    flex: 0,
    paddingTop: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footer: {
    backgroundColor: 'rgba(20,20,20,0.7)',
    padding: 20,
    paddingTop: 8,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
  playerName: {
    fontSize: 26,
  },
  playerCharacter: {
    fontSize: 18,
    marginBottom: 4,
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
    const {
      player,
      showQuestsScreen,
    } = this.props;
    const {
      name,
      level,
      character,
    } = player;

    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image
            source={images.background}
            style={{flex: 1}}
            resizeMode='contain'
          />
        </View>
        <View style={styles.ui}>
          <Row style={styles.header}>
            <Col flex={0} style={{width: 100}}>
              <Button onPress={showQuestsScreen} style={{margin: 10}}>
                Back to quests
              </Button>
            </Col>
            <Col flex={0} style={{width: 100}}>
              <Button onPress={() => actions.modal.showPlayerEditModal(player)} style={{margin: 10}}>
                Edit
              </Button>
            </Col>
          </Row>
          <View style={styles.content}>
            <Image
              style={styles.playerImage}
              source={getPlayerClassImage(character)}
              resizeMode='contain'
            />
          </View>
          <Col style={styles.footer} flex={0}>
            <Text style={[styles.text, styles.playerName]}>{name}</Text>
            <Text style={[styles.text, styles.playerCharacter]}>{_.capitalize(character)} LvL {level}</Text>
            <Row flex={0} justify='center' align='center'>
              <PlayerStats flex={1} showName={false}/>
            </Row>
          </Col>
        </View>
      </View>
    );
  }
}

const stateToProps = (state) => ({
  player: state.player,
})

const actionsToProps = () => ({
  showQuestsScreen: actions.screens.showQuestsScreen,
})

export default connect(stateToProps, actionsToProps)(PlayerScreen);
