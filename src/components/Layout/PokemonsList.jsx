import PropTypes from 'prop-types';
import PokemonCart from './PokemonCart';

const PokemonsList = ({ pokemons }) => {
  return (
    <section className="flex dark:bg-zinc-900 flex-wrap gap-y-12 px-4 xl:px-14 py-12">
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
