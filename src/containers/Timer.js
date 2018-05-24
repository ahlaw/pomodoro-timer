import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

import TimeDisplay from 'components/TimeDisplay';
import ControlButton from 'components/ControlButton';
import ProgressBar from 'components/ProgressBar';

const playIcon = require('assets/play.svg');
const pauseIcon = require('assets/pause.svg');
const stopIcon = require('assets/stop.svg');
const alarmSound = require('assets/ringing.mp3');

const DEFAULT_TIME = 25 * 60;
const HEIGHT = 300;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${HEIGHT}px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default class Timer extends React.Component {
  static propTypes = {
    playAlarm: bool.isRequired,
    promptFocus: func.isRequired,
    promptRelax: func.isRequired
  };

  state = {
    time: DEFAULT_TIME,
    isActive: false
  };

  componentWillUnmount() {
    this.stopTimer();
  }

  activateTimer() {
    this.interval = setInterval(() => {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      } else {
        this.activateAlarm();
      }
    }, 1000);
  }

  activateAlarm() {
    if (this.props.playAlarm) this.alarm.play();
    this.stopTimer();
    this.props.promptRelax();
  }

  stopTimer() {
    if (this.interval) clearInterval(this.interval);
  }

  toggleTimer = () => {
    if (this.state.isActive) this.stopTimer();
    else this.activateTimer();
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      time: DEFAULT_TIME,
      isActive: false
    });
    this.props.promptFocus();
  };

  render() {
    return (
      <TimerContainer onClick={this.soundAlarm}>
        <TimeDisplay time={this.state.time} />
        <ButtonContainer>
          <ControlButton
            icon={this.state.isActive ? pauseIcon : playIcon}
            onClick={this.toggleTimer}
          />
          <ControlButton icon={stopIcon} onClick={this.resetTimer} />
        </ButtonContainer>
        <ProgressBar progress={(DEFAULT_TIME - this.state.time) / DEFAULT_TIME} height={HEIGHT} />
        <audio ref={(node) => { this.alarm = node; }}>
          <source src={alarmSound} />
        </audio>
      </TimerContainer>
    );
  }
}
