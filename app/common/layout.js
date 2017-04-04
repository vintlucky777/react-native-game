import React from 'react';
import {View, StyleSheet} from 'react-native';
import _ from 'lodash';

const rowStyles = StyleSheet.create({
  row: {flex: 1, flexDirection: 'row'},
  rowJustifyLeft: {justifyContent: 'flex-start'},
  rowJustifyRight: {justifyContent: 'flex-end'},
  rowJustifyCenter: {justifyContent: 'center'},
  rowJustifyBetween: {justifyContent: 'space-between'},
  rowJustifySpaceAround: {justifyContent: 'space-around'},
  rowAlignTop: {alignItems: 'flex-start'},
  rowAlignCenter: {alignItems: 'center'},
  rowAlignBottom: {alignItems: 'flex-end'},
});

export class Row extends React.Component {
  render() {
    const {justify, align, style, ...otherProps} = this.props;
    const justifyStyles = {
      left: rowStyles.rowJustifyLeft,
      right: rowStyles.rowJustifyRight,
      center: rowStyles.rowJustifyCenter,
      justify: rowStyles.rowJustifyBetween,
      'space-between': rowStyles.rowJustifySpaceAround,
    };
    const alignStyles = {
      left: rowStyles.rowAlignTop,
      right: rowStyles.rowAlignCenter,
      center: rowStyles.rowAlignBottom,
    };

    return (
      <View
        {...otherProps}
        style={[
          rowStyles.row,
          justifyStyles[justify],
          alignStyles[align],
          style,
        ]}
      />
    );
  }
}

const colStyles = StyleSheet.create({
  col: {flex: 1},
  colJustifyTop: {justifyContent: 'flex-start'},
  colJustifyBottom: {justifyContent: 'flex-end'},
  colJustifyCenter: {justifyContent: 'center'},
  colJustifyBetween: {justifyContent: 'space-between'},
  colJustifySpaceAround: {justifyContent: 'space-around'},
  colAlignLeft: {alignItems: 'flex-start'},
  colAlignCenter: {alignItems: 'center'},
  colAlignRight: {alignItems: 'flex-end'},
});


export class Col extends React.Component {
  render() {
    const {justify, align, style, ...otherProps} = this.props;
    const justifyStyles = {
      top: colStyles.colJustifyTop,
      bottom: colStyles.colJustifyBottom,
      center: colStyles.colJustifyCenter,
      justify: colStyles.colJustifyBetween,
      'space-between': colStyles.colJustifySpaceAround,
    };
    const alignStyles = {
      left: colStyles.colAlignLeft,
      right: colStyles.colAlignCenter,
      center: colStyles.colAlignRight,
    };

    return (
      <View
        {...otherProps}
        style={[
          colStyles.col,
          justifyStyles[justify],
          alignStyles[align],
          style,
        ]}
      />
    );
  }
}
