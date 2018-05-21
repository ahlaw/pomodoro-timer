import React from 'react';
import styled from 'styled-components';
import TimeDisplay from 'components/TimeDisplay';
import ControlButton from 'components/ControlButton';
import ProgressBar from 'components/ProgressBar';

const playIcon = require('assets/play.svg');
const pauseIcon = require('assets/pause.svg');
const stopIcon = require('assets/stop.svg');

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
        this.stopTimer();
      }
    }, 1000);
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
  };

  render() {
    return (
      <TimerContainer>
        <TimeDisplay time={this.state.time} />
        <ButtonContainer>
          <ControlButton
            icon={this.state.isActive ? pauseIcon : playIcon}
            onClick={this.toggleTimer}
          />
          <ControlButton icon={stopIcon} onClick={this.resetTimer} />
        </ButtonContainer>
        <ProgressBar progress={(DEFAULT_TIME - this.state.time) / DEFAULT_TIME} height={HEIGHT} />
      </TimerContainer>
    );
  }
}
