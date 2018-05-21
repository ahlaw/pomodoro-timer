import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';

const ProgressContainer = styled.svg`
  position: absolute;
  left: 50%;
  z-index: -1;
`;

const Path = styled.circle`
  transition: all 1s linear;
`;

const Trail = styled.circle`
  opacity: 0.9;
`;

const ProgressBar = ({ progress, height }) => {
  const width = height;
  const pathWidth = 8;
  const trailWidth = 6;
  const center = width / 2;
  const radius = (width / 2) - (pathWidth / 2);
  const circumference = 2 * radius * Math.PI;
  const strokeDashoffset = circumference - (circumference * progress);

  return (
    <ProgressContainer height={height} width={width} style={{ marginLeft: `-${width / 2}px` }}>
      <Trail
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#607D8B"
        strokeWidth={trailWidth}
      />
      <Path
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#00BCD4"
        strokeWidth={pathWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(270, ${center}, ${center})`}
      />
    </ProgressContainer>
  );
};

ProgressBar.propTypes = {
  progress: number.isRequired,
  height: number.isRequired
};

export default ProgressBar;
