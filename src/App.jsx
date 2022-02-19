import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import Favorites from './components/Favorites';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a75bb;
  color: #ffcb05;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
`;

const App = () => (
  <div>
    <Header>
      <h1>POKE APP</h1>
      <Favorites />
    </Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:numero" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
