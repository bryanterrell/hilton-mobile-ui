import React from 'react';
import styled from 'styled-components';

const Chevron = styled.span`
  font-size: ${props => props.size || '20px' };
  margin-left: ${props => props.leftMargin || `0` };
  margin-right: ${props => props.rightMargin || `0` };
  position: relative;
  bottom: 2px;
`

const LeftChevron = (props) => (
  <Chevron {...props}>&#8249;</Chevron>
);

const RightChevron = (props) => (
  <Chevron {...props}>&#8250;</Chevron>
);

export { LeftChevron, RightChevron };
