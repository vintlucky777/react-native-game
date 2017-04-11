import {createStore, combineReducers, applyMiddleware} from 'redux';

import * as modalActions from 'app/modals/actions';
import {modalReducer} from 'app/modals/reducer';

import * as screensActions from 'app/screens/actions';
import {screensReducer} from 'app/screens/reducer';

import * as playerActions from 'app/store/player/actions';
import {playerReducer} from 'app/store/player/reducer';

import * as questsActions from 'app/store/quests/actions';
import {questsReducer} from 'app/store/quests/reducer';

import {initGameLogic, gameLogicMiddleware} from 'app/store/game-logic';
import {loggerMiddleware} from 'app/store/utils';
import {observeAppState} from 'app/store/app-state';
import {storage} from 'app/utils';
import {storageKeys} from 'app/constants';

const rootReducer = combineReducers({
  quests: questsReducer,
  player: playerReducer,
  modal: modalReducer,
  screens: screensReducer,
})

export const store = createStore(
  rootReducer,
  applyMiddleware(
    // loggerMiddleware,
    gameLogicMiddleware
));
export const actions = {
  quests: questsActions,
  player: playerActions,
  modal: modalActions,
  screens: screensActions,
};

export const initialize = async () => {
  const storedPlayer = await storage.getItem(storageKeys.PLAYER_STATE)
  playerActions.initPlayer(storedPlayer);

  const state = store.getState();

  if (!state.player.onboardingComplete) {
    actions.screens.showOnboardingScreen();
  }

  observeAppState();
  initGameLogic();
};
