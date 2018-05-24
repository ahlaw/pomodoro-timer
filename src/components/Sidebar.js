import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

import Checkbox from 'components/Checkbox';
import HamburgerIcon from 'components/HamburgerIcon';

const SidebarContainer = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  left: ${props => (props.active ? '0' : '-250px')};
  display: flex;
  transition: all 0.3s ease-out;
`;

const SideNav = styled.div`
  width: 220px;
  background-color: #546E7A;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Title = styled.h2`
`;

const Sidebar = ({
  active,
  playAlarm,
  onToggle,
  toggleAlarm
}) => (
  <SidebarContainer active={active}>
    <SideNav>
      <Title>Settings</Title>
      <Checkbox label="Sound" isChecked={playAlarm} onChange={toggleAlarm} />
    </SideNav>
    <HamburgerIcon active={active} onClick={onToggle} />
  </SidebarContainer>
);

Sidebar.propTypes = {
  active: bool.isRequired,
  playAlarm: bool.isRequired,
  onToggle: func.isRequired,
  toggleAlarm: func.isRequired
};

export default Sidebar;
