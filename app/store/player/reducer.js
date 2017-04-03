import {actionTypes} from './actions';
import {playerCharacters} from 'app/constants';

export const defaultState = {
  name: 'Nobody One',
  level: 1,
  character: playerCharacters.BERSERKER,
  hp: 100,
  xp: 0,
  minHp: 0,
  maxHp: 100,
  minXp: 0,
  maxXp: 100,
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

    default:
      return state;
  }
};
