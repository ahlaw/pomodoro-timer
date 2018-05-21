import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';

const Time = styled.h2`
  margin: 0;
  font-size: 72px;
  font-family: Montserrat, sans-serif;
  text-align: center;
`;

const format = (time) => {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  const formattedTime = {
    minutes: `${(min < 10 ? '0' : '') + min}`,
    seconds: `${(sec < 10 ? '0' : '') + sec}`
  };
  return formattedTime;
};

const TimeDisplay = ({ time }) => {
  const { minutes, seconds } = format(time);
  return (
    <Time>{minutes}:{seconds}</Time>
  );
};

TimeDisplay.propTypes = {
  time: number.isRequired
};

export default TimeDisplay;
