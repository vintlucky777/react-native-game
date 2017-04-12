import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Row, Col} from 'app/common/layout';
import Avatar from 'app/components/avatar';

const styles = StyleSheet.create({
  statement: {fontSize: 18, marginTop: 4},
  name: {fontWeight: '600'},
  level: {},
  congrats: {fontSize: 18, marginBottom: 12},
})

class LevelDegradeModal extends React.Component {
  render() {
    const {player} = this.props;
    return (
      <Col flex={1} justify='center' align='center'>
        <Avatar size={80}/>
        <Text style={styles.statement}>
          <Text style={styles.name}>{player.name}</Text>
          <Text style={styles.level}> dropped to level {player.level}</Text>
        </Text>
      </Col>
    );
  }
}

export default connect(state => ({player: state.player}))(LevelDegradeModal)
