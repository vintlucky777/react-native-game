import {actionTypes} from './actions';
import {quests} from 'app/constants';

export const defaultState = {
  questsList: quests,
  selectedQuestId: quests[0].id,
  activeQuestId: null,
  startedAt: null,
};

export const questsReducer = (state = defaultState, {type, payload}) => {
  switch(type) {
    case actionTypes.SELECT_QUEST:
      return {
        ...state,
        selectedQuestId: payload.questId,
      };

    case actionTypes.START_QUEST:
      return {
        ...state,
        activeQuestId: payload.questId,
        startedAt: Date.now(),
      };

    case actionTypes.COMPLETE_QUEST:
    case actionTypes.FAIL_QUEST:
      return {
        ...state,
        activeQuestId: null,
        startedAt: null,
      };

    default:
      return state;
  }
};
