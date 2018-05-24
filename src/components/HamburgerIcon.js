import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

const IconContainer = styled.div`;
  width: 50px;
  height: 40px;
  cursor: pointer;
  margin: 5px auto;
`;

const Bar = styled.div`;
  width: 25px;
  height: 2px;
  background-color: #FFF;
  border-radius: 20px;
  margin: 6px auto;
  transition: 0.3s ease-in-out;
`;

const Bar1 = Bar.extend`;
  transform: ${props => (props.active ? 'rotate(-45deg) translate(-9px, 2px)' : '0')};
`;

const Bar2 = Bar.extend`;
  opacity: ${props => (props.active ? '0' : '1')};
`;

const Bar3 = Bar.extend`;
  transform: ${props => (props.active ? 'rotate(45deg) translate(-9px, -3px)' : '0')};
`;

const HamburgerIcon = ({ active, onClick }) => (
  <IconContainer onClick={onClick}>
    <Bar1 active={active} />
    <Bar2 active={active} />
    <Bar3 active={active} />
  </IconContainer>
);

HamburgerIcon.propTypes = {
  active: bool.isRequired,
  onClick: func.isRequired
};

export default HamburgerIcon;
