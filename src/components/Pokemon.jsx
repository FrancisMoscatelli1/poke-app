import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Pokemon = () => {
  const { numero } = useParams();
  console.log(numero);
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const getPokemoinfo = async (numero) => {
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
        {pokemon.abilities.map((poke, index) => (
          <p key={index}>{poke.ability.name}</p>
        ))}
        <Link to="/">Atras</Link>
      </div>
    )
  );
};
export default Pokemon;
