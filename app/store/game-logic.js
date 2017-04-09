import {actions, store} from 'app/store/store';
import {modalTypes} from 'app/constants';
import {actionTypes as appStoreActionTypes} from 'app/store/app-state';

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

export const initGameLogic = () => {
  gameLogicLoop();
};

export const gameLogicMiddleware = store => next => action => {
  const state = store.getState();
  const {activeQuest} = state.quests;

  next(action);

  if (activeQuest && action.type === appStoreActionTypes.USER_LEFT_APP) {
    actions.quests.failQuest(activeQuest.id);
  }
};
