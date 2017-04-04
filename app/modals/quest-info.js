import React from 'react';
import {View, Text} from 'react-native';

export default class QuestInfoModal extends React.Component {
  render() {
    const {modal} = this.props;

    return (
      <View>
        <Text>{modal.quest.description}</Text>
      </View>
    );
  }
}
