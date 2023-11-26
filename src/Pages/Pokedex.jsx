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

  const [currentPage, setCurrentPage] = useState(1);

  const nameTrainer = useSelector((store) => store.nameTrainer);

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(namePokemon.toLowerCase().trim())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setNamePokemon(e.target.namePokemon.value);
  };

  const paginationLogic = () => {
    /// CANTINDAD DE POKEMONS POR PAGINA
    const POKEMONS_PER_PAGE = 12;

    //pokemons que se van a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * POKEMONS_PER_PAGE;
    const sliceEnd = sliceStart + POKEMONS_PER_PAGE;
    const pokemonInPage = pokemonsByName.slice(sliceStart, sliceEnd);

    //ultima pagina
    const lastPage = Math.ceil(pokemonsByName.length / POKEMONS_PER_PAGE) || 1;

    // bloque actual

    const PAGES_PER_BLOCK = 5;
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

    //paginas que se van a mostrar en el bloque actual

    const pagesInBlock = [];
    const minPage = (actualBlock - 1) * PAGES_PER_BLOCK + 1;
    const maxPage = actualBlock * PAGES_PER_BLOCK;
    for (let i = minPage; i <= maxPage; i++) {
      if (i <= lastPage) {
        pagesInBlock.push(i);
      }
    }
    return { pokemonInPage, lastPage, pagesInBlock };
  };

  const { pagesInBlock, lastPage, pokemonInPage } = paginationLogic();

  const handleClickPreviusPage = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage >= 1) {
      setCurrentPage(newCurrentPage);
    }
  };

  const handleClickNextPage = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage <= lastPage) {
      setCurrentPage(newCurrentPage);
    }
  };

  useEffect(() => {
    if (!currentType) {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1281';

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

  useEffect(() => {
    setCurrentPage(1);
  }, [namePokemon, currentType]);

  return (
    <main>
      <Header />
      <article className=" dark:bg-zinc-900  p-4 flex flex-col gap-4">
        <p className="md:py-5 md:px-10 md:text-xl dark:text-white">
          <span className="text-red-600 font-bold dark:text-yellow-500 ">
            Welcome {nameTrainer}!
          </span>
          , here you can find your favorite pokemon:
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 md:flex-row md:justify-center"
        >
          <div className=" flex justify-center">
            <input
              id="namePokemon"
              placeholder="Type a name pokemon..."
              className="w-52 md:w-64 lg:w-96 rounded-l-md shadow-xl  border border-gray-500/20 px-2 outline-none"
              type="text"
            />
            <button className="bg-red-600 dark:bg-yellow-500   hover:bg-red-500 transition-all duration-300 rounded-r-md ease-in-out text-white py-2 px-3">
              Search
            </button>
          </div>
          <DropdownSelect types={types} handleChangeType={setCurrentType} />
        </form>
      </article>
      <PokemonsList pokemons={pokemonInPage} />
      <ul className="flex gap-3 dark:bg-zinc-900 justify-center py-10 px-2 flex-wrap ">
        {/*pagina anterior */}
        <li
          onClick={() => setCurrentPage(1)}
          className="p-3 bg-red-600 dark:bg-yellow-500 hover:dark:bg-yellow-300  text-white rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-red-400"
        >
          <i className="bx bx-chevrons-left text-2xl"></i>
        </li>

        <li
          onClick={handleClickPreviusPage}
          className="p-3 bg-red-600 dark:bg-yellow-500 hover:dark:bg-yellow-300  text-white rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-red-400"
        >
          <i className="bx bx-chevron-left text-2xl"></i>
        </li>
        {pagesInBlock.map((numberPage) => (
          <li
            onClick={() => setCurrentPage(numberPage)}
            className={`py-4 px-5 bg-red-600 dark:bg-yellow-500 hover:dark:bg-yellow-300  text-white rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-red-400 ${
              numberPage === currentPage && 'bg-red-400 dark:bg-yellow-300'
            }`}
            key={numberPage}
          >
            {numberPage}
          </li>
        ))}

        {/*pagina siguiente */}
        <li
          onClick={handleClickNextPage}
          className="p-3 bg-red-600 dark:bg-yellow-500 hover:dark:bg-yellow-300  text-white rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-red-400"
        >
          <i className="bx bx-chevron-right text-2xl"></i>
        </li>
        {/*ultima pagina */}
        <li
          onClick={() => setCurrentPage(lastPage)}
          className="p-3 bg-red-600 dark:bg-yellow-500 hover:dark:bg-yellow-300 text-white rounded-md cursor-pointer transition-all duration-300 ease-out hover:bg-red-400"
        >
          <i className="bx bx-chevrons-right text-2xl"></i>
        </li>
      </ul>
    </main>
  );
};

export default Pokedex;
