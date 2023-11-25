import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  bgColor,
  bordersColors,
  pokeLinearGradients,
  textColors,
} from '../Others/gradients';
import Header from '../components/Layout/Header';

const PokemonId = () => {
  const [pokemon, setPokemon] = useState(null);

  const { pokemonName } = useParams();

  const percenProgresStat = (baseStat) => {
    const STAT_MAX = 255;
    return `${(baseStat * 100) / STAT_MAX}%`;
  };

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    axios
      .get(url)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Header />
      <section className="grid gap-20 dark:bg-zinc-900 dark:text-yellow-500 justify-items-center pt-28 pb-28 ">
        <article
          className={`w-[290px] xxs:w-[350px] xs:w-[390px] sm:w-[550px] md:w-[650px] lg:w-[690px] border-4 rounded-lg ${
            bordersColors[pokemon?.types[0].type.name]
          }`}
        >
          <section
            className={`relative h-40 ${
              pokeLinearGradients[pokemon?.types[0].type.name]
            } `}
          >
            <div className="absolute px-12 sm:px-32 md:px-40 lg:px-48 -bottom-14">
              <img
                className="drop-shadow-2xl dark:drop-shadow-[0_20px_35px_rgba(255,_255,_255,_0.3)]"
                src={pokemon?.sprites.other.home.front_default}
                alt={pokemon?.name}
              />
            </div>
          </section>

          {/*nombre y numero */}
          <section className="px-2">
            <article className="grid justify-items-center gap-3">
              <h5 className="mt-14 font-semibold text-lg sm:text-xl border-2 px-2">
                # {pokemon?.id}
              </h5>
              <h3
                className={`text-3xl capitalize md:text-4xl font-semibold  ${
                  textColors[pokemon?.types[0].type.name]
                }`}
              >
                {pokemon?.name}
              </h3>
              <div className="h-[2px] bg-slate-200/80  min-w-[90%]"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <h5 className="text-center font-semibold text-base">
                    Weight
                  </h5>
                  <span>{pokemon?.weight}</span>
                </div>
                <div className="text-center">
                  <h5 className="text-center font-semibold text-base">
                    Heigth
                  </h5>
                  <span>{pokemon?.height}</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-x-14">
                <div className="grid gap-2">
                  <h4 className="text-center font-bold text-lg">Type</h4>
                  <div className="flex justify-center gap-x-7">
                    {pokemon?.types.map((type) => (
                      <span
                        className={`px-5 py-1 rounded-md text-white capitalize ${
                          bgColor[pokemon?.types[0].type.name]
                        }`}
                        key={type.type.url}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <h5 className="text-center font-bold text-lg">Abilities</h5>
                  <div className="flex justify-center gap-x-4 md:gap-x-8">
                    {pokemon?.abilities.map((ability) => (
                      <span
                        className="px-5 py-1 rounded-md border-2 capitalize"
                        key={ability.ability.url}
                      >
                        {ability.ability.name}
                      </span>
                    ))}

                    {/* <span>{pokemon?.abilities[0].ability.name}</span>
                    <span>{pokemon?.abilities[1].ability.name}</span> */}
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/*stats */}

          <section className="px-5 py-8">
            <div className="flex items-center pb-3">
              <h4 className="text-2xl font-bold p-2 ">Stats</h4>
              <div className="h-[2px] bg-slate-200/80 min-w-[50%] xxs:min-w-[55%] md:min-w-[75%]"></div>
              <div className="w-16 md:w-20">
                <img src="/images/bola.png" alt="" />
              </div>
            </div>

            <section>
              {pokemon?.stats.map((stat) => (
                <article key={stat.stat.url}>
                  <section className="flex justify-between items-center capitalize font-bold">
                    <h5>{stat.stat.name}</h5>
                    <span className="text-xs">{stat.base_stat}/250</span>
                  </section>

                  {/*barra de prgreso de stat */}

                  <div className="bg-[#F6F6F6] h-8 rounded-md overflow-hidden">
                    <div
                      style={{ width: percenProgresStat(stat.base_stat) }}
                      className={
                        ' h-full bg-gradient-to-r from-yellow-200 to-yellow-600'
                      }
                    ></div>
                  </div>
                </article>
              ))}
            </section>
          </section>
        </article>
        {/* movimientos */}
        <section className="w-[290px] xxs:w-[350px] xs:w-[390px] sm:w-[550px] md:w-[650px] lg:w-[690px] border-4 rounded-lg">
          <article className="p-2 flex flex-wrap gap-4">
            <div className="min-w-[100%]">
              <div className="flex items-center py-3">
                <h4 className="text-2xl font-bold p-2 ">Movements</h4>
                <div className="h-[2px] bg-slate-200/80 min-w-[30%] md:min-w-[60%]"></div>
                <div className="w-16 md:w-20">
                  <img src="/images/bola.png" alt="" />
                </div>
              </div>
            </div>

            {pokemon?.moves.map((move) => (
              <span
                className="text-base px-3 py-1 capitalize bg-[#E5E5E5] dark:bg-gray-500/70 rounded-2xl"
                key={move?.move.url}
              >
                {move?.move.name}
              </span>
            ))}
          </article>
        </section>
      </section>
    </main>
  );
};

export default PokemonId;
