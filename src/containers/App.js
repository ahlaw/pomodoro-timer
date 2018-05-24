import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Timer from 'containers/Timer';
import Title from 'components/Title';
import Sidebar from 'components/Sidebar';

injectGlobal([`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  html, body, #root {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    color: #FFF;
    background-color: #455A64;
  }
`]);

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleContainer = styled.div`
  margin-bottom: 72px;
`;

export default class extends React.Component {
  state = {
    isSidebarOpen: false,
    playAlarm: false,
    done: false
  }

  toggleSidebar = () => {
    this.setState(prevState => ({ isSidebarOpen: !prevState.isSidebarOpen }));
  };

  toggleAlarm = () => {
    this.setState(prevState => ({ playAlarm: !prevState.playAlarm }));
  };

  promptFocus = () => {
    this.setState({ done: false });
  };

  promptRelax = () => {
    this.setState({ done: true });
  };

  render() {
    return (
      <AppContainer>
        <Sidebar
          active={this.state.isSidebarOpen}
          playAlarm={this.state.playAlarm}
          onToggle={this.toggleSidebar}
          toggleAlarm={this.toggleAlarm}
        />
        <TitleContainer>
          <Title>{this.state.done ? 'relax' : 'focus'}</Title>
        </TitleContainer>
        <Timer
          playAlarm={this.state.playAlarm}
          promptFocus={this.promptFocus}
          promptRelax={this.promptRelax}
        />
      </AppContainer>
    );
  }
}
