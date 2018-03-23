import React from 'react';
import styled from 'styled-components';
import Header from './components/header';
import HotelImage from './components/hotelImage';
import HotelDetails from './components/hotelDetails';
import HotelLinks from './components/hotelLinks';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  background: url('../public/images/background.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
// flex: 1 1 100px;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;  
  overflow: auto;
`

const App = () => (
  <AppContainer>
    <Header />
    
    <Content>
      <HotelImage />
      <HotelDetails />
      <HotelLinks />
    </Content>
  </AppContainer>
);

export default App;
