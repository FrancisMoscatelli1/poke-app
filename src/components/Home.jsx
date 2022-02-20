import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Card from './Card';

const ContenedorNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;
const ButtonNav = styled.button`
  display: flex;
  align-items: center;
  border-radius: 20px;
  border-width: 3px;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  background-color: #2a75bb;
  border-color: #ffcb05;
  height: 50px;
  width: 50px;
`;

const Back = styled(MdNavigateBefore)`
  height: 40px;
  width: auto;
  color: #ffcb05;
`;

const Next = styled(MdNavigateNext)`
  height: 40px;
  width: auto;
  color: #ffcb05;
`;

const Home = () => {
  const [elementos, setElementos] = useState(null);
  const [urlFetch, setUrlFetch] = useState('https://pokeapi.co/api/v2/pokemon');
  useEffect(() => {
    const getPokemoinfo = async () => {
      const data = await fetch(urlFetch);
      const response = await data.json();
      setElementos(response);
    };
    getPokemoinfo();
  }, [urlFetch]);

  return (
    elementos && (
      <div>
        <ContenedorNavBar>
          <ButtonNav
            type="button"
            onClick={() =>
              setUrlFetch(elementos.previous ? elementos.previous : urlFetch)
            }
          >
            <Back />
          </ButtonNav>
          <ButtonNav
            type="button"
            onClick={() =>
              setUrlFetch(elementos.next ? elementos.next : urlFetch)
            }
          >
            <Next />
          </ButtonNav>
        </ContenedorNavBar>
        {elementos.results.map((elemento) => (
          <Card
            key={elemento.name}
            numero={Number(elemento.url.split('/')[6])}
          />
        ))}
      </div>
    )
  );
};
export default Home;
