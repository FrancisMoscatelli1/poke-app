import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MdClear } from 'react-icons/md';
import { Capitalize, HyphenToSpace } from '../features/utils';

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

const Atras = styled(MdClear)`
  height: 40px;
  width: auto;
  color: #ffcb05;
`;

const ButtonBack = styled(Link)`
  float: right;
  border: 3px solid #ffcb05;
  border-radius: 20px;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  background-color: #2a75bb;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px;
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
      <div>
        <ContenedorPokemon>
          <h1>{`#${pokemon.id} ${Capitalize(HyphenToSpace(pokemon.name))}`}</h1>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          <p>{`Type: ${pokemon.types
            .map((poke) => Capitalize(poke.type.name))
            .join(', ')}`}</p>
          <p>
            {`Habilidades: ${pokemon.abilities
              .map((poke) => Capitalize(HyphenToSpace(poke.ability.name)))
              .join(', ')}`}
          </p>
          <p>{`Height: ${pokemon.height / 10}m`}</p>
          <p>{`Weight: ${pokemon.weight / 10}Kg`}</p>
          <table>
            <tbody>
              <tr>
                <td>HP</td>
                <td>{pokemon.stats[0].base_stat}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{pokemon.stats[1].base_stat}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{pokemon.stats[2].base_stat}</td>
              </tr>
              <tr>
                <td>Special attack</td>
                <td>{pokemon.stats[3].base_stat}</td>
              </tr>
              <tr>
                <td>Special defense</td>
                <td>{pokemon.stats[4].base_stat}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{pokemon.stats[5].base_stat}</td>
              </tr>
            </tbody>
          </table>
        </ContenedorPokemon>
        <ButtonBack to="/">
          <Atras />
        </ButtonBack>
      </div>
    )
  );
};
export default Pokemon;
