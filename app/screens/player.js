import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {actions} from 'app/store/store';

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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(20,20,20,0.7)',
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
        <View style={styles.background}>
          <Image
            source={images.background}
            style={{flex: 1}}
            resizeMode='contain'
          />
        </View>
        <View style={styles.ui}>
          <Row style={styles.header}>
            <Col flex={2}>
              <Button onPress={showQuestsScreen} style={{margin: 10}}>
                Back to quests
              </Button>
            </Col>
            <Col flex={1}>
              <Button onPress={() => actions.modal.showModal('X')} style={{margin: 10}}>
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
          <View style={styles.footer}>
            <PlayerStats style={styles.playerStats}/>
          </View>
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
