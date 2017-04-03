import React from 'react';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

import {playerCharacters} from 'app/constants';
import {getPlayerClassAvatar} from 'app/utils';

const styles = StyleSheet.create({
  wrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#746E5D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

class Avatar extends React.Component {
  static defaultProps = {
    onPress: () => {},
    onLongPress: () => {},
  };

  render() {
    const {
      character,
      size,
      borderSize,
      style,
      imageStyle,
      clickable,
      onPress,
      onLongPress,
    } = this.props;

    const image = (
      <Image
        source={getPlayerClassAvatar(character)}
        style={[styles.image, imageStyle]}
        resizeMode='cover'
      />
    );

    if (clickable) {
      return (
        <TouchableHighlight
          style={[styles.wrapper, style]}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {image}
        </TouchableHighlight>
      );
    }

    return (
      <View style={[styles.wrapper, style]}>
        {image}
      </View>
    );
  }
}

const stateToProps = (state) => ({character: state.player.character});

export default connect(stateToProps)(Avatar);
