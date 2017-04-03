import _ from 'lodash';
import {action} from 'app/store/utils';
import * as playerActions from 'app/store/player/actions';
import {store} from 'app/store/store';

export const actionTypes = {
  SELECT_QUEST: 'SELECT_QUEST',
  START_QUEST: 'START_QUEST',
  COMPLETE_QUEST: 'COMPLETE_QUEST',
  FAIL_QUEST: 'FAIL_QUEST',
};

export const selectQuest = (questId) => action(actionTypes.SELECT_QUEST, {questId});
export const startQuest = (questId) => action(actionTypes.START_QUEST, {questId});
export const completeQuest = (questId) => {
  const state = store.getState();
  const quest = _.find(state.quests.questsList, q => q.id === questId);
  const {reward} = quest;

  playerActions.applyReward(reward);
  action(actionTypes.COMPLETE_QUEST);
}
export const failQuest = (questId) => {
  const state = store.getState();
  const quest = _.find(state.quests.questsList, q => q.id === questId);
  const {penalty} = quest;

  playerActions.applyPenalty(penalty);
  action(actionTypes.FAIL_QUEST);
}
