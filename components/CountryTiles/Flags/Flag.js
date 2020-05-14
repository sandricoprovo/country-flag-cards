import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  border-radius: 5px;
`;

const Flag = ({ imgSrc, imgAlt }) => <Image src={imgSrc} alt={imgAlt} />;

export default Flag;
