import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Components
import Flag from './Flags/Flag';

const CountryTilesDiv = styled(motion.div)`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const CountryCard = styled(motion.div)`
  padding: 8px;
  border-radius: 5px;
  width: 16%;
  min-width: 150px;
  margin: 8px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 18px 48px -10px rgba(30, 30, 60, 0.35);
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

const container = {
  hidden: { opacity: 0, translateY: -30 },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.09,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

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
      <CountryCard
        key={countryObj.alpha3Code}
        variants={item}
        whileHover={{ scale: 1.1 }}
      >
        <Flag
          imgSrc={countryObj.flag}
          imgAlt={`This is the flag of ${countryObj.name}`}
        />
        <TileText>{countryObj.name}</TileText>
      </CountryCard>
    ));
  }

  return (
    <CountryTilesDiv variants={container} initial="hidden" animate="show">
      {tiles}
    </CountryTilesDiv>
  );
};

export default CountryTiles;
