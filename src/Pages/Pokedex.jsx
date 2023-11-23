import { useSelector } from 'react-redux';
import Header from '../components/Layout/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonsList from '../components/Layout/PokemonsList';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const nameTrainer = useSelector((store) => store.nameTrainer);

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=40';

    axios
      .get(URL)
      .then(({ data }) => setPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Header />
      <p>
        <span>Welcome {nameTrainer}!</span> here you can find your favorite
        pokemon:
      </p>
      <form action="">
        <div>
          <input type="text" />
          <button>Search</button>
        </div>

        <select>
          <option value="">All</option>
        </select>
      </form>
      <PokemonsList pokemons={pokemons} />
    </main>
  );
};

export default Pokedex;