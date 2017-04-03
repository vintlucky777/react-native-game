import {action} from 'app/store/utils';
import {screenNames} from 'app/constants';

const SHOW_SCREEN = 'SHOW_SCREEN';

export const actionTypes = {
  SHOW_SCREEN,
};

export const showScreen = (screen) => action(SHOW_SCREEN, {screen});
export const showPlayerScreen = () => showScreen(screenNames.PLAYER);
export const showQuestsScreen = () => showScreen(screenNames.QUESTS);
