import { useDispatch } from 'react-redux';
import FooterHome from '../components/home/FooterHome';
import { setNameTrainer } from '../store/slices/nameTrainer.slice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const hanldeSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainer(nameTrainer));
    navigate('/pokedex');
  };

  return (
    <main className="grid grid-rows-[1fr_auto] dark:bg-zinc-900 min-h-screen">
      <section className="flex flex-col items-center justify-center gap-5">
        <div className="w-[300px] p-2 md:w-[600px]">
          <img src="/images/logo.png" alt="" />
        </div>
        <article className="text-center">
          <h3 className="text-2xl font-bold dark:text-yellow-500 text-red-600 md:text-5xl">
            ¡Hello Trainer!
          </h3>
          <p className="font-medium md:text-2xl pt-2 dark:text-white">
            For start, give me your name
          </p>
        </article>
        <form onSubmit={hanldeSubmit} className="flex shadow-lg ">
          <input
            className="border border-gray-500/20 px-2 outline-none md:w-[350px] rounded-l-md"
            required
            placeholder="Your Name..."
            id="nameTrainer"
            type="text"
          />
          <button className="bg-red-600 dark:bg-yellow-500 dark:hover:bg-yellow-400 transition-all duration-300 ease-in-out hover:bg-red-500 text-white rounded-r-md  py-2 px-3 md:px-6">
            Start
          </button>
        </form>
      </section>
      {/*section inferior*/}
      <section>
        <FooterHome />
      </section>
    </main>
  );
};

export default Home;
