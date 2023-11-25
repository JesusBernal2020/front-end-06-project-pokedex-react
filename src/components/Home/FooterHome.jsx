import { useDispatch, useSelector } from 'react-redux';
import { handleClickDarkMode } from '../../store/slices/darkMode.slice';
import { useEffect } from 'react';

const FooterHome = () => {
  const { isDark } = useSelector((store) => store.darkMode);

  const dispatch = useDispatch();

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
      <div className="bg-red-600 dark:bg-white h-20"></div>
      {/*section negra */}
      <div className="bg-black h-14"></div>
      {/*pokebola */}
      <div className="bg-white h-20 aspect-square border-[10px] border-black rounded-full absolute bottom-0 left-[50%] -translate-x-1/2 after:content-[''] after:h-11 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-black">
        <button
          onClick={hanldeClickIsDarkMode}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-4 text-white z-20 text-3xl font-bold hover:text-red-600 dark:hover:text-yellow-500 transition-all duration-300 ease-in-out"
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

export default FooterHome;
