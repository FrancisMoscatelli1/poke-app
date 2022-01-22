import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/card";

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 22px;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
`;

const ContainerCards = styled.div`
  
`;

const getPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return data;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data.results);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <Header>POKE APP</Header>
      <ContainerCards>
        {pokemons.map((pokemon, index) => (
          <Card key={pokemon.name} id={index + 1} label={pokemon.name} />
        ))}
      </ContainerCards>
    </div>
  );
}

export default App;
