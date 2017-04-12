import _ from 'lodash';
import {actionTypes} from './actions';
import {quests, debugQuests} from 'app/constants';

const questGroups = _.groupBy(quests, q => q.duration);
const questSamples = _.map(questGroups, questGroup => _.sample(questGroup));
// const gameQuests = [...debugQuests, ...questSamples];

const makeDebugQuest = () => {
  const sampleQuest = _.sample(quests);
  return {
    ...sampleQuest,
    id: 'debugQuest1',
    title: `[debug] ${sampleQuest.title}`,
    duration: 3,
    reward: {xp: 100},
    penalty: {hp: 100},
  }
};

const gameQuests = [makeDebugQuest(), ...questSamples];

export const defaultState = {
  questsList: gameQuests,
  selectedQuestId: gameQuests[debugQuests.length].id,
  selectedQuest: gameQuests[debugQuests.length],
  activeQuestId: null,
  activeQuest: null,
  startedAt: null,
};

const stateAfterQuestComplete = (state) => {
  const {questsList, activeQuest, selectedQuest} = state;
  const nextStateBase = {
    ...state,
    activeQuestId: null,
    activeQuest: null,
    startedAt: null,
  };

  if (activeQuest.duration < 10) {
    const newDebugQuest = makeDebugQuest();
    return {
      ...nextStateBase,
      questsList: [newDebugQuest, ..._.tail(questsList)],
      selectedQuest: newDebugQuest,
      selectedQuestId: newDebugQuest.id,
    };
  }

  const questsGroup = _(questGroups[activeQuest.duration]);
  const questsReplacement = _(questsGroup).without(activeQuest).sample();
  const newQuestsList = _(questsList)
                          .without(activeQuest)
                          .concat(questsReplacement)
                          .sortBy('duration')
                          .valueOf();

  return {
    ...nextStateBase,
    questsList: newQuestsList,
    selectedQuest: questsReplacement,
    selectedQuestId: questsReplacement.id,
  }
}

export const questsReducer = (state = defaultState, {type, payload}) => {
  switch(type) {
    case actionTypes.SELECT_QUEST:
      return {
        ...state,
        selectedQuestId: payload.questId,
        selectedQuest: payload.quest,
      };

    case actionTypes.START_QUEST:
      return {
        ...state,
        activeQuestId: payload.questId,
        activeQuest: payload.quest,
        startedAt: Date.now(),
      };

    case actionTypes.COMPLETE_QUEST:
      return stateAfterQuestComplete(state);

    case actionTypes.FAIL_QUEST:
      return {
        ...state,
        activeQuestId: null,
        activeQuest: null,
        startedAt: null,
      };

    default:
      return state;
  }
};
