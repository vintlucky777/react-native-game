import {Platform, AlertIOS, ToastAndroid, AsyncStorage, Vibration} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {playerCharacters} from 'app/constants';
import {images} from 'assets/images';

export const alert = (msg) => Platform.OS === 'ios'
  ? AlertIOS.alert(msg)
  : ToastAndroid.show(msg, ToastAndroid.SHORT);

export const clamp = (i, min, max) => Math.min(Math.max(i, min), max);
export const lerp = (i, min, max) => min + (max - min) * i;
export const unlerp = (value, min, max) => (value - min) / (max - min);

export const isPlatformIOS = Platform.OS === 'ios';
export const isPlatformAndroid = Platform.OS === 'android';

export const getPlayerClassAvatar = (character) => {
  switch (character) {
    case playerCharacters.BERSERKER:
    case playerCharacters.ASSASSIN:
    case playerCharacters.WIZARD:
      return images.characters[`${character.toLowerCase()}_avatar`];
    default:
      return images.characters.assassin_avatar;
  }
}

export const getPlayerClassImage = (character) => {
  switch (character) {
    case playerCharacters.BERSERKER:
    case playerCharacters.ASSASSIN:
    case playerCharacters.WIZARD:
      return images.characters[`${character.toLowerCase()}`];
    default:
      return images.characters.assassin;
  }
}

export const getPlayerLevelStats = (level) => {
  const baseHP = 100;
  const HPfactor = 1.1;
  const maxHp = Math.round(Math.pow(HPfactor, (level - 1)) * baseHP);
  const minHp = 0;

  const baseXP = 100;
  const XPfactor = 1.2;
  const maxXp = Math.round(Math.pow(XPfactor, (level - 1)) * baseXP);
  const minXp = 0;

  return {
    level,
    minHp,
    maxHp,
    minXp,
    maxXp,
  };
};

export const storage = {
  storeItem: (key, data, cb) => AsyncStorage.setItem(key, JSON.stringify(data), cb),
  getItem: (key, cb) => AsyncStorage.getItem(key, cb).then(JSON.parse),
  removeItem: (key, cb) => AsyncStorage.removeItem(key, cb),
};

export const localPush = ({title, message, playSound = false}) => PushNotification.localNotification({title, message, playSound})
export const vibrate = () => Vibration.vibrate();
