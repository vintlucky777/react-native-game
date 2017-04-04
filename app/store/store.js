import {createStore, combineReducers} from 'redux';

import * as modalActions from 'app/modals/actions';
import {modalReducer} from 'app/modals/reducer';

import * as screensActions from 'app/screens/actions';
import {screensReducer} from 'app/screens/reducer';

import * as playerActions from 'app/store/player/actions';
import {playerReducer} from 'app/store/player/reducer';

import * as questsActions from 'app/store/quests/actions';
import {questsReducer} from 'app/store/quests/reducer';

import {gameLogicLoop} from 'app/store/game-logic';

const rootReducer = combineReducers({
  quests: questsReducer,
  player: playerReducer,
  modal: modalReducer,
  screens: screensReducer,
})

export const store = createStore(rootReducer);
export const actions = {
  quests: questsActions,
  player: playerActions,
  modal: modalActions,
  screens: screensActions,
};

gameLogicLoop();
