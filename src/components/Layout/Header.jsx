import { useDispatch, useSelector } from 'react-redux';
import { setNameTrainer } from '../../store/slices/nameTrainer.slice';
import { handleClickDarkMode } from '../../store/slices/darkMode.slice';
import { useEffect } from 'react';

const Header = () => {
  const { isDark } = useSelector((store) => store.darkMode);

  const dispatch = useDispatch();

  const hanldeClickLogout = () => {
    dispatch(setNameTrainer(''));
  };

  const hanldeClickIsDarkMode = () => {
    dispatch(handleClickDarkMode());
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <section className="relative">
      {/*section roja */}
      <div className="bg-red-600 dark:bg-white h-20 relative flex justify-end items-end p-2">
        <button
          onClick={hanldeClickLogout}
          className=" h-11 aspect-square rounded-full bg-white flex justify-center items-center text-3xl hover:text-red-600 hover:bg-black dark:bg-black dark:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black transition-all duration-300 ease-in-out"
        >
          <i className="bx bx-exit"></i>
        </button>
        <div className="absolute left-2 bottom-0 w-[220px] xxs:w-[290px] sm:w-[400px]">
          <img src="/images/logo.png" alt="" />
        </div>
      </div>
      {/*section negra */}
      <div className="bg-black h-12"></div>
      {/*pokebola */}
      <div className="bg-white h-20 aspect-square border-[10px] border-black rounded-full absolute -bottom-4 right-0 -translate-x-1/2 after:content-[''] after:h-11 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-black">
        <button
          onClick={hanldeClickIsDarkMode}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-4 text-white z-20 text-3xl font-bold hover:text-red-600 transition-all duration-300 ease-in-out dark:hover:text-yellow-500"
        >
          {isDark ? (
            <i className="bx bxs-sun"></i>
          ) : (
            <i className="bx bxs-moon"></i>
          )}
        </button>
      </div>
    </section>
  );
};

export default Header;
