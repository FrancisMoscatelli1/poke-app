import { useState } from "react/cjs/react.development";
import styled from "styled-components";

const getPokemonInfo = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};
const CardContainer = styled.div`
  display: inline-block;
  width: 150px;  
  margin: 20px 5px 0 5px;
  background-color: #fff;
  border-radius: 5px;
`;

const Card = ({ id, label }) => {
  const [image, setImage] = useState({});
  getPokemonInfo(id).then((data) => {
    setImage(data.sprites.front_default);
  });
  return (
    <CardContainer>
      <img src={image}></img>
      <p>
        #{id} {label}
      </p>
    </CardContainer>
  );
};

export default Card;
