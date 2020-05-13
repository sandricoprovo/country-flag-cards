import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const Flag = ({ imgSrc, imgAlt }) => <Image src={imgSrc} alt={imgAlt} />;

export default Flag;
