import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import _ from 'lodash';

const TICK_INTERVAL = 1000;

export default class Time extends React.Component {
  static propTypes = {
    duration: PropTypes.number.isRequired,
    startedAt: PropTypes.number,
  };

  componentDidMount() {
    if (this.props.startedAt) {
      this.initTicker(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.clearTicker();
    if (nextProps.startedAt) {
      this.initTicker(nextProps);
    }
  }

  componentWillUnmount() {
    this.clearTicker();
  }

  initTicker(props) {
    setTimeout(() => {
      this.tick();
      this._ticker = setInterval(this.tick, TICK_INTERVAL);
    }, TICK_INTERVAL - (Date.now() - props.startedAt) % TICK_INTERVAL);
  }

  clearTicker() {
    clearInterval(this._ticker);
  }

  _ticker = null;

  tick = () => {
    this.forceUpdate();
  }

  renderMinutes(minutes) {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style={this.props.textStyle}>
          {_.padStart(minutes, 2, '0')}
        </Text>
      </View>
    );
  }

  renderSemicolon() {
    return (
      <View style={{flex: 0}}>
        <Text style={this.props.textStyle}>:</Text>
      </View>
    );
  }

  renderSeconds(seconds) {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Text style={this.props.textStyle}>
          {_.padStart(seconds, 2, '0')}
        </Text>
      </View>
    );
  }

  renderTimeString(minutes, seconds) {
    return (
      <Text style={this.props.textStyle}>
        {_.padStart(minutes, 2, '0')}:{_.padStart(seconds, 2, '0')}
      </Text>
    );
  }

  render() {
    const {duration, startedAt} = this.props;
    const time = startedAt
      ? Math.ceil(duration - (Date.now() - startedAt) / 1000)
      : duration;

    const seconds = Math.ceil(time % 60);
    const minutes = Math.floor(time / 60);

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {this.renderMinutes(minutes)}
        {this.renderSemicolon()}
        {this.renderSeconds(seconds)}
        {/* {this.renderTimeString(minutes, seconds)} */}
      </View>
    );
  }
}
