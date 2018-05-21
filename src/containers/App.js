import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Timer from 'containers/Timer';
import Title from 'components/Title';

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

export default () => (
  <AppContainer>
    <TitleContainer>
      <Title>focus</Title>
    </TitleContainer>
    <Timer />
  </AppContainer>
);
