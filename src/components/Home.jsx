import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const ContenedorNavBar = styled.div`
display: flex;
justify-content: space-between;
margin: 0 5px 0 5px;
bottom: 0; 
`;

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [elementos, setElementos] = useState([...Array(20).keys()]);
  return (
    <div>
      {
        elementos.map((elemento) => <Card key={elemento} numero={elemento + 1} />)
      }
      <ContenedorNavBar>
        <button type="button">Atras</button>
        <button type="button">Siguiente</button>
      </ContenedorNavBar>
    </div>
  );
};
export default Home;
