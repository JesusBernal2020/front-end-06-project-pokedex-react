import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  bordersColors,
  pokeLinearGradients,
  textColors,
} from '../../Others/gradients';
import { Link } from 'react-router-dom';

const PokemonCart = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  const formatTypesPokemons = (types = []) => {
    const nameTypes = types.map((type) => type.type.name);
    const titleTypes = nameTypes.join(' / ');
    return titleTypes;
  };

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
      to={`/pokedex/${pokemon?.name}`}
      className={`w-[275px] rounded-md border-[10px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.40)] transition-all duration-500 ease-in-out ${
        bordersColors[pokemon?.types[0].type.name]
      }`}
    >
      {/*section superior */}
      <section
        className={`relative h-36 ${
          pokeLinearGradients[pokemon?.types[0].type.name]
        }`}
      >
        <div className="absolute px-12 -bottom-10">
          <img
            className="drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
            src={pokemon?.sprites.other.home.front_default}
            alt=""
          />
        </div>
      </section>
      {/*section inferior */}
      <section>
        <div className="text-center">
          <h3
            className={`mt-14 font-bold text-3xl capitalize ${
              textColors[pokemon?.types[0].type.name]
            }`}
          >
            {pokemon?.name}
          </h3>
          <h5 className="text-xl capitalize">
            {formatTypesPokemons(pokemon?.types)}
          </h5>
          <span className="text-sm text-[#9F9F9F]">Type</span>
        </div>
        <hr />
        <section className="grid grid-cols-2 text-center p-4 gap-y-5">
          {/*generar lista de stack */}
          {pokemon?.stats.slice(0, 4).map((stat) => (
            <div key={stat.stat.url}>
              <h6 className="capitalize text-[#9F9F9F]">{stat.stat.name}</h6>
              <span
                className={`font-bold text-lg capitalize ${
                  textColors[pokemon?.types[0].type.name]
                }`}
              >
                {stat.base_stat}
              </span>
            </div>
          ))}
        </section>
      </section>
    </Link>
  );
};

PokemonCart.propTypes = {
  pokemonUrl: PropTypes.string,
};

export default PokemonCart;
