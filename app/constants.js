export const screenNames = {
  PLAYER: 'PLAYER',
  QUESTS: 'QUESTS',
};

export const modalTypes = {
  LEVEL_UP: 'LEVEL_UP',
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

export const quests = [
  {
    id: 'quest10',
    duration: 3,
    title: 'Fight the Ogre',
    image: 'orc_chieftain',
    description: 'The Ogre is on march!\nSave the village!',
    victoryMsg: 'Hell yeaah!',
    defeatMsg: 'The evil Ogre outran you!',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest20',
    duration: 1200,
    title: 'Defeat a Troll',
    image: 'trolls',
    description: 'The Ogre is on march!\nSave the village!',
    victoryMsg: 'Hell yeaah!',
    defeatMsg: 'The evil Ogre outran you!',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest30',
    duration: 1800,
    title: 'Raid on Barbarians',
    image: 'elven_riot',
    description: 'The Ogre is on march!\nSave the village!',
    victoryMsg: 'Hell yeaah!',
    defeatMsg: 'The evil Ogre outran you!',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest40',
    duration: 2400,
    title: 'Slave the Dragon',
    image: 'red_dragon',
    description: 'The Ogre is on march!\nSave the village!',
    victoryMsg: 'Hell yeaah!',
    defeatMsg: 'The evil Ogre outran you!',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest50',
    duration: 3000,
    title: 'Save the Princess',
    image: 'save_the_princess',
    description: 'The Ogre is on march!\nSave the village!',
    victoryMsg: 'Hell yeaah!',
    defeatMsg: 'The evil Ogre outran you!',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest60',
    duration: 3600,
    title: 'Storm the Castle',
    image: 'temple_of_the_black_sun',
    description: 'The Ogre is on march!\nSave the village!',
    victoryMsg: 'Hell yeaah!',
    defeatMsg: 'The evil Ogre outran you!',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
];
