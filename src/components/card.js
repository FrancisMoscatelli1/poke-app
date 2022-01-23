import { useState, useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 150px;
  margin: 20px 5px 0 5px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) =>
    props.tipo === "grass"
      ? "#78C850"
      : props.tipo === "rock"
      ? "#B8A038"
      : props.tipo === "ice"
      ? "#98D8D8"
      : props.tipo === "dragon"
      ? "#7038F8"
      : props.tipo === "dark"
      ? "#705848"
      : props.tipo === "psychc"
      ? "#F85888"
      : props.tipo === "bug"
      ? "#A8B820"
      : props.tipo === "psychic"
      ? "#F85888"
      : props.tipo === "flying"
      ? "#A890F0"
      : props.tipo === "steel"
      ? "#B8B8D0"
      : props.tipo === "fire"
      ? "#F08030"
      : props.tipo === "fighting"
      ? "#C03028"
      : props.tipo === "ground"
      ? "#E0C068"
      : props.tipo === "ghost"
      ? "#705898"
      : props.tipo === "ghost"
      ? "#705898"
      : props.tipo === "poison"
      ? "#A040A0"
      : props.tipo === "water"
      ? "#6890F0"
      : props.tipo === "fairy"
      ? "#EE99AC"
      : props.tipo === "electric"
      ? "#F8D030"
      : props.tipo === "normal"
      ? "#A8A878"
      : "none"};
  border-radius: 0 0 5px 5px;
  padding-left: 5px;
`;

const Card = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const getPokemoinfo = async (id) => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const response = await data.json();
      setPokemon(response);
    };
    getPokemoinfo(id);
  }, [id]);

  return (
    pokemon && (
      <CardContainer>
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        <TextContainer tipo={pokemon.types[0].type.name}>
          <p>
            #{pokemon.id} {pokemon.name}
          </p>
        </TextContainer>
      </CardContainer>
    )
  );
};

export default Card;
