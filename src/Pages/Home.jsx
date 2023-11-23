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
    <main className="grid grid-rows-[1fr_auto] min-h-screen">
      <section className="flex flex-col items-center justify-center gap-5">
        <div className="w-[300px] p-2">
          <img src="/images/logo.png" alt="" />
        </div>
        <article className="text-center">
          <h3 className="text-2xl font-bold text-red-600">¡Hello Trainer!</h3>
          <p className="font-medium">For start, give me your name</p>
        </article>
        <form onSubmit={hanldeSubmit} className="flex shadow-lg ">
          <input
            className="border border-gray-500/20 px-2 outline-none"
            required
            placeholder="Your Name..."
            id="nameTrainer"
            type="text"
          />
          <button className="bg-red-600 text-white py-2 px-3">Start</button>
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
