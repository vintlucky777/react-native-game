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

export const quests = [
  {
    id: 'quest10',
    duration: 600,
    title: 'Fight the Ogre',
    image: 'orc_chieftain',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest20',
    duration: 1200,
    title: 'Defeat a Troll',
    image: 'trolls',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest30',
    duration: 1800,
    title: 'Raid on Barbarians',
    image: 'elven_riot',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest40',
    duration: 2400,
    title: 'Slave the Dragon',
    image: 'red_dragon',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest50',
    duration: 3000,
    title: 'Save the Princess',
    image: 'save_the_princess',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
  {
    id: 'quest60',
    duration: 3600,
    title: 'Storm the Castle',
    image: 'temple_of_the_black_sun',
    reward: {xp: 20},
    penalty: {hp: 10}
  },
];
