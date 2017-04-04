import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';

import Timer from 'app/common/timer';
import {questImage} from 'assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  imageCnt: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: '#2F2828',
  },
  image: {
    width: 172,
    height: 172,
    borderRadius: 86,
  },
  duration: {
    fontSize: 80,
    fontWeight: '200',
    color: 'white',
  },
})

export default class Quest extends React.Component {
  static defaultProps = {
    onPress: () => {},
  };

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps, this.props);
  }

  questImage() {
    const {quest, startedAt, onShowInfo} = this.props;
    const {id, title, icon, duration} = quest;
    const isQuestActive = !!startedAt;
    const imageView = (
      <Image
        style={styles.image}
        source={questImage(icon)}
        resizeMode={'cover'}
      />
    );

    if (isQuestActive) {
      return (
        <View style={styles.imageCnt}>
          {imageView}
        </View>
      );
    }

    return (
      <TouchableHighlight
        style={styles.imageCnt}
        underlayColor={null}
        onPress={onShowInfo}
      >
        {imageView}
      </TouchableHighlight>
    );
  }

  render() {
    const {quest, startedAt} = this.props;
    const {title, duration} = quest;

    return (
      <View style={styles.container}>
        <View style={styles.titleWrp}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {this.questImage()}
        <Timer textStyle={styles.duration} startedAt={startedAt} duration={duration}/>
      </View>
    );
  }
}
