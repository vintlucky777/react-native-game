import {actionTypes} from './actions';
import {playerCharacters, storageKeys} from 'app/constants';
import {getPlayerLevelStats, storage} from 'app/utils';

const startLevel = 1;
const startStats = getPlayerLevelStats(startLevel);

export const defaultState = {
  name: 'Nobody One',
  level: startLevel,
  character: playerCharacters.BERSERKER,
  ...startStats,
  hp: startStats.maxHp,
  xp: startStats.minHp,
};

let pendingPersistPromise = null;
const persistPlayer = (state) => {
  let promise = null;

  const nextPromise = () => storage.storeItem(
    storageKeys.PLAYER_STATE,
    state,
    () => {
      if (pendingPersistPromise && pendingPersistPromise === promise) {
        pendingPersistPromise = null;
      }
    }
  );

  if (pendingPersistPromise) {
    pendingPersistPromise = promise = pendingPersistPromise.then(nextPromise);
  } else {
    pendingPersistPromise = promise = nextPromise();
  }
};

export const playerReducer = (state = defaultState, {type, payload}) => {
  let nextPlayerState = state;

  switch(type) {
    case actionTypes.PLAYER_INIT:
      return {
        ...state,
        ...payload,
      };

    case actionTypes.PLAYER_EDIT_NAME:
      nextPlayerState = {
        ...state,
        name: payload.name,
      };
      persistPlayer(nextPlayerState);
      return nextPlayerState;

    case actionTypes.PLAYER_EDIT_CHARACTER:
      nextPlayerState = {
        ...state,
        character: payload.character,
      };
      persistPlayer(nextPlayerState);
      return nextPlayerState;

    case actionTypes.PLAYER_APPLY_REWARD:
      nextPlayerState = {
        ...state,
        hp: state.hp + payload.hp || state.hp,
        xp: state.xp + payload.xp || state.xp,
      };
      persistPlayer(nextPlayerState);
      return nextPlayerState;

    case actionTypes.PLAYER_APPLY_PENALTY:
      nextPlayerState = {
        ...state,
        hp: state.hp - payload.hp || state.hp,
        xp: state.xp - payload.xp || state.xp,
      };
      persistPlayer(nextPlayerState);
      return nextPlayerState;

    case actionTypes.PLAYER_PROMOTE_LEVEL:
      const stateAfterLevelPromotion = (state, level) => {
        const levelStats = getPlayerLevelStats(level);
        return {
          ...state,
          ...levelStats,
          xp: levelStats.minXp,
          hp: levelStats.maxHp,
        }
      }
      nextPlayerState = stateAfterLevelPromotion(state, payload.level);
      persistPlayer(nextPlayerState);
      return nextPlayerState;

    case actionTypes.PLAYER_DEGRADE_LEVEL:
      const stateAfterLevelDegrade = (state, level) => {
        const levelStats = getPlayerLevelStats(level);
        return {
          ...state,
          ...levelStats,
          xp: levelStats.minXp,
          hp: state.level === 1 ? 1 : levelStats.maxHp,
        }
      }
      nextPlayerState = stateAfterLevelDegrade(state, payload.level);
      persistPlayer(nextPlayerState);
      return nextPlayerState;

    default:
      return state;
  }
};
