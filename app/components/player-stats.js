import React from 'react';
import _ from 'lodash';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ProgressBar from 'app/common/progress-bar';
import {images} from 'assets/images';

const styles = StyleSheet.create({
  wrapper: {flex: 0},
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  attrIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    marginRight: 8,
  },
  attrValue: {
    width: 56,
    marginLeft: 4,
    marginRight: 4,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  },
  progressBg: {
    backgroundColor: '#6F6867',
  },
  progressFillHP: {
    backgroundColor: '#DB584B',
  },
  progressFillXP: {
    backgroundColor: '#57A0ED',
  }
});

class PlayerStats extends React.Component {
  render() {
    const {style, name, level, class: playerClass, hp, xp, minHp, maxHp, minXp, maxXp} = this.props;

    return (
      <View style={style}>
        <Text style={styles.name}>{name}</Text>
        <ProgressBar
          fillStyle={styles.progressFillHP}
          backgroundStyle={styles.progressBg}
          value={hp}
          min={minHp}
          max={maxHp}
          addonBefore={<Image style={styles.attrIcon} source={images.icons.hp} resizeMode='cover'/>}
          addonAfter={<Text style={styles.attrValue}>{hp}/{maxHp}</Text>}
        />
        <ProgressBar
          fillStyle={styles.progressFillXP}
          backgroundStyle={styles.progressBg}
          value={xp}
          min={minXp}
          max={maxXp}
          addonBefore={<Image style={styles.attrIcon} source={images.icons.xp} resizeMode='cover'/>}
          addonAfter={<Text style={styles.attrValue}>{xp}/{maxXp}</Text>}
        />
      </View>
    );
  }
}

const stateToProps = (state) => _.pick(state.player, [
  'name',
  'level',
  'class',
  'hp',
  'xp',
  'minHp',
  'maxHp',
  'minXp',
  'maxXp',
]);

export default connect(stateToProps)(PlayerStats)
