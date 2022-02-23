import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MdClear } from 'react-icons/md';
import { NormalizeFistWord } from '../features/utils';

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 10px auto auto auto;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
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
        <ButtonBack to="/">
          <Atras />
        </ButtonBack>
        <Contenedor>
          <h1>{`#${pokemon.id} ${NormalizeFistWord(pokemon.name)}`}</h1>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          <p>
            <u>Height:</u> {`${pokemon.height / 10} m`}
          </p>
          <p>
            <u>Weight:</u> {`${pokemon.weight / 10} Kg`}
          </p>
          <p>
            <u>Abilities:</u>{' '}
            {pokemon.abilities
              .map((poke) => NormalizeFistWord(poke.ability.name))
              .join(', ')}
          </p>
          <p>
            <u>Type:</u>{' '}
            {pokemon.types
              .map((poke) => NormalizeFistWord(poke.type.name))
              .join(', ')}
          </p>
          <table>
            <tbody>
              {pokemon.stats.map((stats) => (
                <tr key={stats.stat.name}>
                  <td>{NormalizeFistWord(stats.stat.name)}</td>
                  <td>{stats.base_stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Contenedor>
      </div>
    )
  );
};
export default Pokemon;
