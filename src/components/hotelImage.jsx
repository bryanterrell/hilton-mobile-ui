import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6% 5%;
`

const Img = styled.img`
  width: calc(100% - 10px);
  border: solid 5px #fff;
`

const HotelImage = () => (
  <Container>
    <Img src='../../public/images/hotelexterior.jpg' alt='hotel exterior' />
  </Container>
);

export default HotelImage;
