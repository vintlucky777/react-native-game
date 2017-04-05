import _ from 'lodash';
import {action} from 'app/store/utils';
import {store, actions} from 'app/store/store';

export const actionTypes = {
  SELECT_QUEST: 'SELECT_QUEST',
  START_QUEST: 'START_QUEST',
  COMPLETE_QUEST: 'COMPLETE_QUEST',
  FAIL_QUEST: 'FAIL_QUEST',
};

const getQuestById = (questId) => {
  const state = store.getState();
  return _.find(state.quests.questsList, q => q.id === questId);
}

export const selectQuest = (questId) => {
  const quest = getQuestById(questId);

  action(actionTypes.SELECT_QUEST, {questId, quest});
};

export const startQuest = (questId) => {
  const quest = getQuestById(questId);

  action(actionTypes.START_QUEST, {questId, quest});
};

export const completeQuest = (questId) => {
  const quest = getQuestById(questId);
  const {reward} = quest;

  actions.player.applyReward(reward);
  actions.modal.showQuestSuccessModal(quest);
  actions.player.promoteLevel();
  action(actionTypes.COMPLETE_QUEST, {questId, quest});
}
export const failQuest = (questId) => {
  const quest = getQuestById(questId);
  const {penalty} = quest;

  actions.player.applyPenalty(penalty);
  actions.modal.showQuestFailureModal(quest);
  actions.player.degradeLevel();
  action(actionTypes.FAIL_QUEST, {questId, quest});
}
