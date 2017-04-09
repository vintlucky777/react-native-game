import {AppState} from 'react-native';
import {action} from 'app/store/utils';

const onAppActive = () => {
  // App active
  userOpenedApp();
};

const onScreenLock = () => {
  // Phone locked
  deviceLocked();
};

const onLostContext = () => {
  // App closed/collapsed
  userLeftApp();
};

let appWentInactive = null;
let appWentInactiveAgo = null;

const handleAppStateChange = (nextAppState) => {
  switch (nextAppState) {
    case 'active':
      appWentInactive = null;
      onAppActive();
      break;

    case 'inactive':
      appWentInactive = Date.now();
      break;

    case 'background':
      appWentInactiveAgo = Date.now() - appWentInactive;
      if (appWentInactiveAgo > 0 && appWentInactiveAgo < 100) {
        onScreenLock();
      } else {
        onLostContext();
      }

      appWentInactive = null;
      break;

    default:
      // ...
  }
};

export const observeAppState = () =>
  AppState.addEventListener('change', handleAppStateChange);

export const stopObserveAppState = () =>
  AppState.removeEventListener('change', handleAppStateChange);

export const actionTypes = {
  USER_OPENED_APP: 'USER_OPENED_APP',
  USER_LEFT_APP: 'USER_LEFT_APP',
  DEVICE_LOCKED: 'DEVICE_LOCKED',
};

export const userOpenedApp = () => action(actionTypes.USER_OPENED_APP);
export const userLeftApp = () => action(actionTypes.USER_LEFT_APP);
export const deviceLocked = () => action(actionTypes.DEVICE_LOCKED);
