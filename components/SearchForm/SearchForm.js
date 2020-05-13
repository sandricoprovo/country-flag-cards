import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100vw;
  margin-bottom: 24px;
  padding: 16px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchInfo = styled.h1`
  width: 100vw;
  font-size: 16px;
  font-family: 'Merriweather', serif;
`;

const SearchTextInput = styled.input`
  width: 20%;
  min-width: 200px;
  height: 30px;
  margin-top: 16px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px;
  font-family: 'Merriweather', serif;

  &:focus {
    outline: none;
    border: 1px solid rgba(255, 86, 86, 1);
  }
`;

const SearchSubmitBtn = styled.button`
  display: block;
  margin-top: 24px;
  padding: 12px 32px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  transition: all 0.1s ease-in-out;
  background-color: rgba(255, 86, 86, 1);
  color: rgba(89, 0, 0, 1);

  &:hover {
    box-shadow: 0px 18px 48px -10px rgba(255, 166, 166, 1);
    transform: translateY(-5px);
  }

  &:focus {
    outline: none;
  }
`;

const SearchForm = ({ regionUpdater }) => {
  const [enteredRegion, setEnteredRegion] = useState('europe');

  return (
    <SearchContainer>
      <SearchInfo>Enter the region you'd like to see flags for:</SearchInfo>
      <SearchInfo>
        The five searchable regions are: Africa, Americas, Asia, Europe &
        Oceania
      </SearchInfo>
      <SearchTextInput
        type="text"
        onChange={(event) => setEnteredRegion(event.target.value)}
      />
      <SearchSubmitBtn onClick={() => regionUpdater(enteredRegion)}>
        Submit
      </SearchSubmitBtn>
    </SearchContainer>
  );
};

export default SearchForm;
