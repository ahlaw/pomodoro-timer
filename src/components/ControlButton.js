import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

const Button = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const ControlButton = ({ icon, onClick }) => (
  <Button role="button">
    <Icon src={icon} onClick={onClick} />
  </Button>
);

ControlButton.propTypes = {
  icon: string,
  onClick: func
};

export default ControlButton;
