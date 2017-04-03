import React from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import {unlerp} from 'app/utils';

var RNstyles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#bbbbbb',
    height: 5
  },
  fill: {
    flex: 1,
    backgroundColor: '#3b5998',
    height: 5
  },
  nonFill: {
    flex: 1,
    height: 5
  }
});

class RNProgressBar extends React.Component {
  static defaultProps = {
    style: RNstyles,
    easing: Easing.inOut(Easing.ease),
    easingDuration: 200,
    width: 100
  };

  constructor(props) {
    super(props);

    this.state = {
      progress: new Animated.Value(this.props.progress),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
      this.update();
    }
  }

  render() {
    const fillWidth = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const nonFillWidth = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

    return (
      <View style={[RNstyles.background, this.props.backgroundStyle, this.props.style]}>
        <Animated.View style={[RNstyles.fill, this.props.fillStyle, {flex: fillWidth}]} />
        <Animated.View style={[RNstyles.nonFill, {flex: nonFillWidth}]} />
      </View>
    );
  }

  update() {
    Animated.timing(this.state.progress, {
      easing: this.props.easing,
      duration: this.props.easingDuration,
      toValue: this.props.progress
    }).start();
  }
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  progress: {
    // flex: 1,
  },
  progressBg: {
    backgroundColor: '#3E3A3A',
    borderRadius: 4,
    height: 8,
  },
  progressFill: {
    backgroundColor: '#2A9D5B',
    borderRadius: 4,
    height: 8,
  },
});

export default class ProgressBar extends React.Component {
  render() {
    const {
      progress,
      value,
      min,
      max,
      addonBefore,
      addonAfter,
      fillStyle,
      backgroundStyle,
    } = this.props;

    return (
      <View style={styles.row}>
        {addonBefore}
        <RNProgressBar
          style={styles.progress}
          fillStyle={[styles.progressFill, fillStyle]}
          backgroundStyle={[styles.progressBg, backgroundStyle]}
          progress={progress || unlerp(value, min, max)}
        />
        {addonAfter}
      </View>
    );
  }
}
