import { useSelector } from 'react-redux';
import Header from '../components/Layout/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonsList from '../components/Layout/PokemonsList';
import DropdownSelect from '../components/Layout/DropdownSelect';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const [namePokemon, setNamePokemon] = useState('');

  const [types, setTypes] = useState([]);

  const [currentType, setCurrentType] = useState('');

  const nameTrainer = useSelector((store) => store.nameTrainer);

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(namePokemon.toLowerCase().trim())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setNamePokemon(e.target.namePokemon.value);
  };

  /* const handleChangeType = (e) => {
    setCurrentType(e.target.value);
  }; */

  useEffect(() => {
    if (!currentType) {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=40';

      axios
        .get(URL)
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => console.log(err));
    }
  }, [currentType]);

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type';

    axios
      .get(URL)
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (currentType) {
      const url = `https://pokeapi.co/api/v2/type/${currentType}`;

      axios
        .get(url)
        .then(({ data }) => {
          console.log(data.pokemon);
          const pokemonsByType = data.pokemon.map((pokemon) => pokemon.pokemon);
          setPokemons(pokemonsByType);
        })
        .catch((err) => console.log(err));
    }
  }, [currentType]);

  return (
    <main>
      <Header />
      <article className="py-5 px-2 flex flex-col gap-4">
        <p>
          <span className="text-red-600 font-bold">Welcome {nameTrainer}!</span>{' '}
          here you can find your favorite pokemon:
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 md:flex-row md:justify-center"
        >
          <div className=" flex justify-center">
            <input
              id="namePokemon"
              placeholder="Type a name pokemon..."
              className="w-52 shadow-xl border border-gray-500/20 px-2 outline-none"
              type="text"
            />
            <button className="bg-red-600 text-white py-2 px-3">Search</button>
          </div>
          <DropdownSelect types={types} handleChangeType={setCurrentType} />
          {/* <select onChange={handleChangeType}>
            <option value="">All</option>
            {types.map((type) => (
              <option value={type.name} key={type.url}>
                {type.name}
              </option>
            ))}
          </select> */}
        </form>
      </article>
      <PokemonsList pokemons={pokemonsByName} />
    </main>
  );
};

export default Pokedex;
