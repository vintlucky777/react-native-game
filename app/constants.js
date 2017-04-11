import _ from 'lodash';
export {quests as quests, debugQuests as debugQuests} from 'app/quests';

export const screenNames = {
  ONBOARDING: 'ONBOARDING',
  PLAYER: 'PLAYER',
  QUESTS: 'QUESTS',
};

export const modalTypes = {
  LEVEL_UP: 'LEVEL_UP',
  PLAYER_EDIT: 'PLAYER_EDIT',
  QUEST_INFO: 'QUEST_INFO',
  QUEST_VICTORY: 'QUEST_VICTORY',
  QUEST_DEFEAT: 'QUEST_DEFEAT',
};

export const playerCharacters = {
  BERSERKER: 'BERSERKER',
  ASSASSIN: 'ASSASSIN',
  WIZARD: 'WIZARD',
};

export const colors = {
  HP_BAR: '',
  HP_BAR_STATS: '',
  HP_BAR_BG: '',
  XP_BAR: '',
  XP_BAR_STATS: '',
  XP_BAR_BG: '',
  PLAYER_NAME: '',
  PLAYER_AVATAR_BORDER: '',
  QUEST_NAME: '',
  QUEST_TIMER: '',
  QUEST_IMAGE_BORDER: '',
  START_BUTTON: '',
  START_BUTTON_TEXT: '',
  FLEE_BUTTON: '',
  FLEE_BUTTON_TEXT: '',
};

export const storageRootKey = '@questime'
export const storageKeys = {
  PLAYER_STATE: `${storageRootKey}:player_state`,
};
