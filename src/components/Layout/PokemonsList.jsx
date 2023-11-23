import PropTypes from 'prop-types';
import PokemonCart from './PokemonCart';

const PokemonsList = ({ pokemons }) => {
  return (
    <section>
      {pokemons.map((pokemon) => (
        <PokemonCart key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};

PokemonsList.propTypes = {
  pokemons: PropTypes.array,
};

export default PokemonsList;
