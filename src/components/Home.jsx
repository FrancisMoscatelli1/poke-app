// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Card from './Card';

const ContenedorNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5px 5px 5px;
  bottom: 0;
`;
const ButtonNav = styled.button`
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
  const [elementos, setElementos] = useState(
    Array.from({ length: 20 }, (_, i) => i + 1),
  );

  return (
    <div>
      {elementos.map((elemento) => (
        <Card key={elemento} numero={elemento} />
      ))}
      <ContenedorNavBar>
        <ButtonNav
          type="button"
          onClick={() => setElementos(Array.from(elementos, (el) => el - 20))}
        >
          <Back />
        </ButtonNav>
        <ButtonNav
          type="button"
          // ultimo disponible 898
          onClick={() => setElementos(Array.from(elementos, (el) => el + 20))}
        >
          <Next />
        </ButtonNav>
      </ContenedorNavBar>
    </div>
  );
};
export default Home;
