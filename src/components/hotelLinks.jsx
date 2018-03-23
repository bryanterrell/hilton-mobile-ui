import React from 'react';
import styled from 'styled-components';
import { RightChevron } from './chevron';

const Container = styled.div`
  margin: 30px 6%;
`

const Row = styled.div`
  background: linear-gradient(#fff 0, #b5d9ff 100%);
  font-size: 26px;
  font-weight: 600;
  color: #272727;
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`

const TopRow = Row.extend`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const BottomRow = Row.extend`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const ChevronWrapper = styled.div`
  margin-left: auto;
`

const Chevron = () => (
  <ChevronWrapper><RightChevron size='36px' /></ChevronWrapper>
)

const HotelLinks = () => (
  <Container>
    <TopRow>
      <span>Map</span>
      <Chevron />
    </TopRow>
    <Row>
      <span>Photo Gallery</span>
      <Chevron />
    </Row>
    <Row>
      <span>Amenities</span>
      <Chevron />
    </Row>
    <BottomRow>
      <span>Make Reservation</span>
      <Chevron />
    </BottomRow>
  </Container>
);

export default HotelLinks;
