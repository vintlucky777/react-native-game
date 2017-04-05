import {actionTypes} from './actions';
import {playerCharacters} from 'app/constants';
import {getPlayerLevelStats} from 'app/utils';

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


export const playerReducer = (state = defaultState, {type, payload}) => {
  switch(type) {
    case actionTypes.PLAYER_INIT:
      return {
        ...state,
        ...payload,
      };

    case actionTypes.PLAYER_CHANGE_NAME:
      return {
        ...state,
        name: payload.name,
      };

    case actionTypes.PLAYER_CHANGE_CHARACTER:
      return {
        ...state,
        character: payload.character,
      };

    case actionTypes.PLAYER_APPLY_REWARD:
      return {
        ...state,
        hp: state.hp + payload.hp || state.hp,
        xp: state.xp + payload.xp || state.xp,
      };

    case actionTypes.PLAYER_APPLY_PENALTY:
      return {
        ...state,
        hp: state.hp - payload.hp || state.hp,
        xp: state.xp - payload.xp || state.xp,
      };

    case actionTypes.PLAYER_PROMOTE_LEVEL:
      const stateAfterLevelPromotion = (state, level) => {
        const levelStats = getPlayerLevelStats(level);
        return {
          ...state,
          ...levelStats,
          hp: levelStats.maxHp,
        }
      }
      return stateAfterLevelPromotion(state, payload.level);

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
      return stateAfterLevelDegrade(state, payload.level);

    default:
      return state;
  }
};
