import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
        <h1>{`#${numero} ${pokemon.name}`}</h1>
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        <br />
        Habilidades:
        {pokemon.abilities.map((poke) => (
          <p key={poke.ability.name}>{poke.ability.name}</p>
        ))}
        <Link to="/">Atras</Link>
      </div>
    )
  );
};
export default Pokemon;
