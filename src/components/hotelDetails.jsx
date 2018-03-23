import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 6%;
`

const Title = styled.div`
  font-size: 28px;
  color: #fff;
`

const Address = styled.div`
  margin: 7px 0;
  font-size: 22px;
  color: #b5d9ff;
`

const Tel = styled.a`
  margin: 7px 0;
  font-size: 22px;
  color: white;
  text-decoration: underline;
`

const HotelDetails = () => (
  <Container>
    <Title>Hilton Chicago</Title>
    <Address>720 South Michigan Avenue</Address>
    <Address>Chicago, Illinois 60605</Address>
    <Tel href='tel:1-312-922-4400'>1-312-922-4400</Tel>
  </Container>
);

export default HotelDetails;
