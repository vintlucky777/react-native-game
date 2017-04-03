import {Platform, AlertIOS, ToastAndroid} from 'react-native';
import {playerCharacters} from 'app/constants';
import {images} from 'assets/images';

export const alert = (msg) => Platform.OS === 'ios'
  ? AlertIOS.alert(msg)
  : ToastAndroid.show(msg, ToastAndroid.SHORT);

export const clamp = (i, min, max) => Math.min(Math.max(i, min), max);
export const lerp = (i, min, max) => min + (max - min) * i;
export const unlerp = (value, min, max) => (value - min) / (max - min);

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
