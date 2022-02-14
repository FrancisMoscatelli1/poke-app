import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const ContenedorPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 5px 5px;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
`;

const Pokemon = () => {
  const { numero } = useParams();
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const getPokemoinfo = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
      const response = await data.json();
      setPokemon(response);
    };
    getPokemoinfo(numero);
  }, [numero]);
  return (
    pokemon && (
      <ContenedorPokemon>
        <h1>{`#${pokemon.id} ${Capitalize(pokemon.name)}`}</h1>
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        <p>
          {`Habilidades: ${pokemon.abilities
            .map((poke) => Capitalize(poke.ability.name))
            .join(', ')}`}
        </p>
        <p>{`Altura: ${pokemon.height / 10}m`}</p>
        <p>{`Peso: ${pokemon.weight / 10}Kg`}</p>
        <table>
          {pokemon.stats.map(
            (item) => (
              <tr>
                <td>{item.stat.name}</td>
                <td>{item.base_stat}</td>
              </tr>
            ),
            [],
          )}
        </table>
        <Link to="/">Atras</Link>
      </ContenedorPokemon>
    )
  );
};
export default Pokemon;
