import React from 'react';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

import RoundImage from 'app/common/round-image';
import {playerCharacters} from 'app/constants';
import {getPlayerClassAvatar} from 'app/utils';

class Avatar extends React.Component {
  static defaultProps = {
    onPress: () => {},
    onLongPress: () => {},
  };

  render() {
    const {
      character,
      ...otherProps,
    } = this.props;

    return (
      <RoundImage
        image={getPlayerClassAvatar(character)}
        {...otherProps}
      />
    );
  }
}

const stateToProps = (state) => ({character: state.player.character});

export default connect(stateToProps)(Avatar);
