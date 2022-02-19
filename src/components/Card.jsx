import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { addFavorite } from '../features/favorite/favoriteSlice';
import store from '../app/store';

const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 150px;
  margin: 10px 5px 10px 5px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
`;

const Text = styled(Link)`
  display: flex;
  width: 100%;
  background-color: ${(props) => {
    if (props.tipo === 'grass') return '#78C850';
    if (props.tipo === 'rock') return '#B8A038';
    if (props.tipo === 'ice') return '#98D8D8';
    if (props.tipo === 'dragon') return '#7038F8';
    if (props.tipo === 'dark') return '#705848';
    if (props.tipo === 'psychic') return '#F85888';
    if (props.tipo === 'bug') return '#A8B820';
    if (props.tipo === 'flying') return '#A890F0';
    if (props.tipo === 'steel') return '#B8B8D0';
    if (props.tipo === 'fire') return '#F08030';
    if (props.tipo === 'fighting') return '#C03028';
    if (props.tipo === 'ground') return '#E0C068';
    if (props.tipo === 'ghost') return '#705898';
    if (props.tipo === 'poison') return '#A040A0';
    if (props.tipo === 'water') return '#6890F0';
    if (props.tipo === 'fairy') return '#EE99AC';
    if (props.tipo === 'electric') return '#F8D030';
    if (props.tipo === 'normal') return '#A8A878';
    return 'gray';
  }};
  border-radius: 0 0 5px 5px;
  color: white;
  padding: 10px;
  margin: 0;
  text-decoration: none;
`;

const Favorite = styled(MdFavoriteBorder)`
  height: 20px;
  width: auto;
  margin: 5px;
  position: absolute;
  color: #ffcb05;
  z-index: 2;
  &:hover {
    cursor: pointer;
    color: #e0b400;
  }
`;

const Card = ({ ...numero }) => {
  const [pokemon, setPokemon] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPokemoinfo = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${numero.numero}`,
      );
      const response = await data.json();
      setPokemon(response);
    };
    getPokemoinfo(numero.numero);
  }, [numero.numero]);

  return (
    pokemon && (
      <Container>
        <div>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          <Favorite
            onClick={() => {
              dispatch(
                addFavorite({
                  number: pokemon.id,
                  name: pokemon.name,
                  image: pokemon.sprites.front_default,
                }),
              );
              console.log(store.getState().favorite);
            }}
          />
        </div>
        <Text tipo={pokemon.types[0].type.name} to={`/pokemon/${pokemon.id}`}>
          {`#${pokemon.id} `}
          <br />
          {`${Capitalize(pokemon.name)}`}
        </Text>
      </Container>
    )
  );
};

export default Card;
