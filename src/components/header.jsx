import React from 'react';
import styled from 'styled-components';
import { LeftChevron } from './chevron';

const HeaderContainer = styled.header`
  height: 64px;
  flex: 0 64px;
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  align-items: center;
  border-bottom: solid 2px #404040;
`

const Box = styled.div`
  flex: 2;
`

const LeftBox = styled.div`
  flex: 1;
  margin-right: auto;
`

const RightBox = styled.div`
  flex: 1;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
`

const HeaderButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  height: 40px;
  padding: 0px 10px;
  margin: 0 15px;
  background: linear-gradient(#404040 0, #000 100%);
  white-space: nowrap;
  color: white;
  border: none;
  box-shadow: 1px 1px 1px #333;
  border-radius: 3px;
  display: flex;
  align-items: center;
`

const Title = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`

const Logo = styled.img`
  height: 30px;
  padding-right: 15px;
`

const Header = () => (
  <HeaderContainer>
    <LeftBox>
      <HeaderButton><LeftChevron rightMargin='5px' size='28px' /> Back</HeaderButton>
    </LeftBox>
    
    <Box>
      <Title>Hotel Details</Title>
    </Box>

    <RightBox>
      <Logo src='../public/images/logo.png' alt='Hilton' />
    </RightBox>
  </HeaderContainer>
);

export default Header;
