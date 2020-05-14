import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import CountryTiles from './components/CountryTiles/CountryTiles';
import SearchForm from './components/SearchForm/SearchForm';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--bgcolor);
`;

const AppTitle = styled.h1`
  font-size: 32px;
  font-family: 'Merriweather', serif;
`;

const App = () => {
  const [regionState, setRegionState] = useState('europe');

  const newRegionHandler = (newRegion) => {
    setRegionState(newRegion);
  };

  return (
    <AppContainer data-theme="default">
      <AppTitle>Flags of the World</AppTitle>
      <SearchForm regionUpdater={newRegionHandler} />
      <CountryTiles region={regionState} />
    </AppContainer>
  );
};

export default App;
