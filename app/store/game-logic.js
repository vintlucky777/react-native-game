import {actions, store} from 'app/store/store';
import {modalTypes} from 'app/constants';

const checkQuestIsDone = (state) => {
  const {activeQuest, startedAt} = state.quests;
  const questExpired = activeQuest && startedAt + activeQuest.duration * 1e3 < Date.now();

  if (questExpired) {
    actions.quests.completeQuest(activeQuest.id);
  }
}

const gameLogic = (state) => {
  // ...rewards, reactions, etc. should live here
  checkQuestIsDone(state);
};

// export const gameStates = {
//   PLAY: 'PLAY',
//   IDLE: 'IDLE',
// };
//
// export const gameState = {state: null};

export const gameLogicLoop = () => {
  const state = store.getState();

  gameLogic(state);
  requestAnimationFrame(gameLogicLoop);
};
