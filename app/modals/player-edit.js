import React from 'react';
import _ from 'lodash';
import {View, Text, Image, TextInput, Picker, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Row, Col} from 'app/common/layout';
import Button from 'app/common/button';
import {playerCharacters} from 'app/constants';
import {actions} from 'app/store/store';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  label: {
    padding: 12,
    marginBottom: 8,
    fontSize: 18,
    color: '#888',
  },
  labelActive: {
    color: '#444',
  },
  nameInput: {
    height: 44,
    marginLeft: 24,
    marginRight: 24,
    color: 'black',
    fontSize: 24,
    color: '#222',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 4,
  },
  characterButton: {
    backgroundColor: '#4F85B8',
    borderColor: '#527698',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 8,
    height: 36,
  },
  characterText: {
    color: '#fff',
    fontSize: 20
  },
});

class PlayerEditModal extends React.Component {
  state = {section: 'name'};

  _renderInput() {
    const {player} = this.props;
    const {name, character} = player;
    const charButton = (char) => (
      <Button
        key={char}
        onPress={() => actions.player.editCharacter(char)}
        style={styles.characterButton}
      >
        <Text style={styles.characterText}>
          {_.capitalize(char)}
        </Text>
      </Button>
    );

    switch (this.state.section) {
      case 'name':
        return (
          <TextInput
            style={styles.nameInput}
            defaultValue='Hello'
            editable={true}
            defaultValue={name}
            onChangeText={(name) => actions.player.editName(name)}
          />
        );
      case 'character':
        return [
          charButton(playerCharacters.ASSASSIN),
          charButton(playerCharacters.BERSERKER),
          charButton(playerCharacters.WIZARD),
        ];
      default:
        return null;
    }
  }

  render() {
    const {section} = this.state;

    return (
      <Col style={styles.wrapper} flex={1} justify='top'>
        <Row justify='center' flex={0}>
          <TouchableOpacity onPress={() => this.setState({section: 'name'})}>
            <Text style={[styles.label, section === 'name' && styles.labelActive]}>
              Name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({section: 'character'})}>
            <Text style={[styles.label, section === 'character' && styles.labelActive]}>
              Character
            </Text>
          </TouchableOpacity>
        </Row>
        <Col>
          {this._renderInput()}
        </Col>
      </Col>
    );
  }
}

const stateToProps = (state) => ({
  player: state.player,
})

export default connect(stateToProps)(PlayerEditModal);
