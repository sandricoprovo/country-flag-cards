import React, { useState, useEffect } from 'react';

// Components
import Flag from './Flags/Flag';

const CountryTiles = () => {
  const [flagState, setFlagState] = useState('');
  const [regionState, setRegionState] = useState('');
  const [counameState, setCountryNameState] = useState('');

  return (
    <div>
      <Flag
        imgSrc={flagState}
        imgAlt={`This is the flag of ${countryNameState}`}
      />
      <h1>Tiles</h1>
    </div>
  );
};

export default CountryTiles;
