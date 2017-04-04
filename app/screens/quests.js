import React, {Component} from 'react';
import _ from 'lodash';
import {StyleSheet, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {store} from 'app/store/store';
import Quest from 'app/components/quest';
import PlayerStats from 'app/components/player-stats';
import Avatar from 'app/components/avatar';

import Swiper from 'app/common/swiper';

import Button from 'app/common/button';
import {actions} from 'app/store/store';
import {alert} from 'app/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: 20,
    marginLeft: 8,
    marginRight: 8,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  playerStats: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
  },
  buttonStart: {
    borderWidth: 2,
    backgroundColor: '#3B9D39',
    borderColor: '#3D7D37',
    width: 200,
    height: 60,
    marginBottom: 50,
  },
  buttonFlee: {
    borderWidth: 2,
    backgroundColor: '#9D393F',
    borderColor: '#6C2A2E',
    width: 200,
    height: 60,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  questWrapper: {
    flex: 1,
  },
});

class QuestsScreen extends Component {
  _handleQuestSwipe = (selectedId) => {
    const {quests, selectQuest} = this.props;
    const selectedQuest = quests[selectedId];

    selectQuest(selectedQuest.id);
  }

  _handleButtonClick = () => {
    const {selectedQuestId, startQuest, activeQuestId, failQuest} = this.props;

    if (activeQuestId) {
      failQuest(activeQuestId);
    } else {
      startQuest(selectedQuestId);
    }
  }

  _renderQuestsSelector() {
    const {quests, activeQuestId, selectedQuestId, questStartedAt, selectQuest, showQuestInfo} = this.props;
    const activeQuestOrderId = _.findIndex(quests, q => q.id === activeQuestId);
    const selectedQuestOrderId = _.findIndex(quests, q => q.id === selectedQuestId);
    const questItems = quests.map(quest => (
      <Quest
        key={quest.id}
        quest={quest}
        startedAt={quest.id === activeQuestId ? questStartedAt : null}
        onShowInfo={() => showQuestInfo(quest)}
      />
    ));

    return (
      <Swiper
        items={questItems}
        itemStyle={styles.questWrapper}
        initialPage={activeQuestOrderId > 0 ? activeQuestOrderId : selectedQuestOrderId}
        onChangePage={this._handleQuestSwipe}
        locked={!!activeQuestId}
      />
    );
  }

  render() {
    const {
      startQuest,
      selectedQuestId,
      activeQuestId,
      showPlayerScreen,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar
            clickable={true}
            onPress={showPlayerScreen}
          />
          <PlayerStats style={styles.playerStats} />
        </View>
        <View style={styles.content}>
          {this._renderQuestsSelector()}
        </View>
        <View style={styles.footer}>
          <Button
            style={activeQuestId ? styles.buttonFlee : styles.buttonStart}
            textStyle={styles.buttonText}
            onPress={this._handleButtonClick}
          >
            {activeQuestId ? 'FLEE' : 'START'}
          </Button>
          {/* <Button
            style={{position: 'absolute', right: 10, bottom: 10}}
            onPress={() => actions.player.applyReward({hp: 10})}
          >
            HP+
          </Button>
          <Button
            style={{position: 'absolute', left: 10, bottom: 10}}
            onPress={() => actions.player.applyPenalty({hp: 10})}
          >
            HP-
          </Button> */}
        </View>
      </View>
    );
  }
}

const stateToProps = (state) => ({
  quests: state.quests.questsList,
  selectedQuestId: state.quests.selectedQuestId,
  activeQuestId: state.quests.activeQuestId,
  questStartedAt: state.quests.startedAt,
})

const actionsToProps = () => ({
  selectQuest: actions.quests.selectQuest,
  startQuest: actions.quests.startQuest,
  failQuest: actions.quests.failQuest,
  completeQuest: actions.quests.completeQuest,
  showQuestInfo: actions.modal.showQuestInfoModal,
  showPlayerScreen: actions.screens.showPlayerScreen,
})

export default connect(stateToProps, actionsToProps)(QuestsScreen);
