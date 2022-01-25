import React, { useState } from 'react';
import Card from './Card';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [elementos, setElementos] = useState([...Array(20).keys()]);
  return (
    <div>
      {
        elementos.map((elemento) => <Card key={elemento} numero={elemento + 1} />)
      }

    </div>
  );
};
export default Home;
