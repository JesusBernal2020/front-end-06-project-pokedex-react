import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const PokemonCart = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      {/*section superior */}
      <section>
        <div>
          <img src={pokemon?.sprites.other.home.front_default} alt="" />
        </div>
      </section>
      {/*section inferior */}
      <section>
        <h3>Nombre Pokemon</h3>
        <h5>Tipo1 / Tipo2</h5>
        <span>Type</span>
        <hr />
        <section>{/*generar lista de stack */}</section>
      </section>
    </article>
  );
};

PokemonCart.propTypes = {
  pokemonUrl: PropTypes.string,
};

export default PokemonCart;
