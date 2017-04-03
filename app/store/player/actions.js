import {action} from 'app/store/utils';
import {playerCharacters} from 'app/constants';
import {defaultState} from './reducer';

export const actionTypes = {
  PLAYER_INIT: 'PLAYER_INIT',
  PLAYER_CHANGE_NAME: 'PLAYER_CHANGE_NAME',
  PLAYER_CHANGE_CHARACTER: 'PLAYER_CHANGE_CHARACTER',
  PLAYER_APPLY_REWARD: 'PLAYER_APPLY_REWARD',
  PLAYER_APPLY_PENALTY: 'PLAYER_APPLY_PENALTY',
};

export const initPlayer = () => action(actionTypes.PLAYER_INIT, {});

export const changeName = (name) => action(actionTypes.PLAYER_INIT, {name});
export const changeCharacter = (character) => action(actionTypes.PLAYER_CHANGE_CHARACTER, {character});
export const applyReward = ({hp, xp}) => action(actionTypes.PLAYER_APPLY_REWARD, {xp, hp});
export const applyPenalty = ({hp, xp}) => action(actionTypes.PLAYER_APPLY_PENALTY, {xp, hp});
