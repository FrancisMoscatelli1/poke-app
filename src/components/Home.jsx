import React, { useState } from 'react';
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
  // eslint-disable-next-line no-unused-vars
  const [elementos, setElementos] = useState([...Array(20).keys()]);
  return (
    <div>
      {
        elementos.map((elemento) => <Card key={elemento} numero={elemento + 1} />)
      }
      <ContenedorNavBar>
        {/* { onClick={setElementos(useEffect(() => elementos.map((el) => el + 20), []))}} */}
        <ButtonNav type="button"><Back /></ButtonNav>
        <ButtonNav type="button"><Next /></ButtonNav>
      </ContenedorNavBar>
    </div>
  );
};
export default Home;
