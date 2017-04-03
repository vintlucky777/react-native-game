import React from 'react';
import {StyleSheet} from 'react-native';
import ApslButton from 'apsl-react-native-button';

const styles = StyleSheet.create({
  button: {backgroundColor: '#3B4B54', borderColor: '#21272A', padding: 8},
  text: {color: 'white'},
});

export default class Button extends React.Component {
  render() {
    return (
      <ApslButton
        activeOpacity={.5}
        {...this.props}
        style={[styles.button, this.props.style]}
        textStyle={[styles.text, this.props.textStyle]}
      />
    );
  }
};
