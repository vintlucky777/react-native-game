import {action} from 'app/store/utils';
import {store, actions} from 'app/store/store';
import {playerCharacters} from 'app/constants';
import {getPlayerLevelStats} from 'app/utils';

export const actionTypes = {
  PLAYER_INIT: 'PLAYER_INIT',
  PLAYER_EDIT_NAME: 'PLAYER_EDIT_NAME',
  PLAYER_EDIT_CHARACTER: 'PLAYER_EDIT_CHARACTER',
  PLAYER_APPLY_REWARD: 'PLAYER_APPLY_REWARD',
  PLAYER_APPLY_PENALTY: 'PLAYER_APPLY_PENALTY',
  PLAYER_SET_LEVEL: 'PLAYER_SET_LEVEL',
  PLAYER_PROMOTE_LEVEL: 'PLAYER_PROMOTE_LEVEL',
  PLAYER_DEGRADE_LEVEL: 'PLAYER_DEGRADE_LEVEL',
  PLAYER_COMPLETE_ONBOARDING: 'PLAYER_COMPLETE_ONBOARDING',
};

export const initPlayer = (state) => action(actionTypes.PLAYER_INIT, {...state});
export const completeOnboarding = () => action(actionTypes.PLAYER_COMPLETE_ONBOARDING);

export const editName = (name) => action(actionTypes.PLAYER_EDIT_NAME, {name});
export const editCharacter = (character) => action(actionTypes.PLAYER_EDIT_CHARACTER, {character});
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

    const {player: nextPlayer} = store.getState();

    action(actionTypes.PLAYER_PROMOTE_LEVEL, {level: nextLevel})
    actions.modal.showLevelUpModal(player, nextPlayer);
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

    const {player: nextPlayer} = store.getState();

    action(actionTypes.PLAYER_DEGRADE_LEVEL, {level: nextLevel})
    actions.modal.showLevelDegradeModal(player, nextPlayer);
  }
};
