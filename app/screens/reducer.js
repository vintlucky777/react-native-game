import {actionTypes} from './actions';
import {screenNames} from 'app/constants';

export const defaultState = {
  activeScreen: screenNames.QUESTS,
};

export const screensReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case actionTypes.SHOW_SCREEN:
      return {
        ...state,
        activeScreen: payload.screen,
      }

    default:
      return state;
  }
}
