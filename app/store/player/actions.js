import {action} from 'app/store/utils';
import {store} from 'app/store/store';
import {playerCharacters} from 'app/constants';
import {getPlayerLevelStats} from 'app/utils';

export const actionTypes = {
  PLAYER_INIT: 'PLAYER_INIT',
  PLAYER_CHANGE_NAME: 'PLAYER_CHANGE_NAME',
  PLAYER_CHANGE_CHARACTER: 'PLAYER_CHANGE_CHARACTER',
  PLAYER_APPLY_REWARD: 'PLAYER_APPLY_REWARD',
  PLAYER_APPLY_PENALTY: 'PLAYER_APPLY_PENALTY',
  PLAYER_SET_LEVEL: 'PLAYER_SET_LEVEL',
  PLAYER_PROMOTE_LEVEL: 'PLAYER_PROMOTE_LEVEL',
  PLAYER_DEGRADE_LEVEL: 'PLAYER_DEGRADE_LEVEL',
};

export const initPlayer = () => action(actionTypes.PLAYER_INIT, {});

export const changeName = (name) => action(actionTypes.PLAYER_INIT, {name});
export const changeCharacter = (character) => action(actionTypes.PLAYER_CHANGE_CHARACTER, {character});
export const applyReward = ({hp, xp}) => action(actionTypes.PLAYER_APPLY_REWARD, {xp, hp});
export const applyPenalty = ({hp, xp}) => action(actionTypes.PLAYER_APPLY_PENALTY, {xp, hp});

export const promoteLevel = () => {
  const {player} = store.getState();
  const {xp, level} = player;
  const currentLevelStats = getPlayerLevelStats(level);

  if (xp >= currentLevelStats.maxXp) {
    let nextLevel = level + 1;
    while (getPlayerLevelStats(nextLevel).maxXp < xp) {
      nextLevel += 1;
    }

    action(actionTypes.PLAYER_PROMOTE_LEVEL, {level: nextLevel})
  }
};

export const degradeLevel = () => {
  const {player} = store.getState();
  const {hp, level} = player;
  const currentLevelStats = getPlayerLevelStats(level);

  if (hp <= currentLevelStats.minHp) {
    if (level === 1) {
      nextLevel = 1;
    } else {
      nextLevel = level - 1;
    }

    action(actionTypes.PLAYER_DEGRADE_LEVEL, {level: nextLevel})
  }
};
