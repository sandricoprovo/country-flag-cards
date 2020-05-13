import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import Flag from './Flags/Flag';

const CountryCard = styled.div`
  padding: 8px;
  border-radius: 5px;
  width: 16%;
  min-width: 150px;
  margin: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 18px 48px -10px rgba(30, 30, 60, 0.35);
    transform: scale(1.1);
  }
`;

const TileText = styled.h1`
  font-size: 16px;
  font-family: 'Merriweather', serif;
`;

const CallToAction = styled.h1`
  font-size: 24px;
  font-family: 'Merriweather', serif;
`;

const CountryTiles = ({ region }) => {
  const [countryState, setCountryState] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/region/${region.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryState(data);
      });
  }, [region]);

  let tiles = <CallToAction>Please Pick a Region Above</CallToAction>;
  if (countryState.length > 0) {
    tiles = countryState.map((countryObj) => (
      <CountryCard key={countryObj.alpha3Code}>
        <Flag
          imgSrc={countryObj.flag}
          imgAlt={`This is the flag of ${countryObj.name}`}
        />
        <TileText>{countryObj.name}</TileText>
      </CountryCard>
    ));
  }

  return tiles;
};

export default CountryTiles;
