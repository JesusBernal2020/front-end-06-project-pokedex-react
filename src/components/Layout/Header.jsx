const Header = () => {
  return (
    <section className="relative">
      {/*section roja */}
      <div className="bg-red-600 h-20 relative">
        <div className="absolute left-0 bottom-0 w-[220px] xxs:w-[290px] sm:w-[400px]">
          <img src="/images/logo.png" alt="" />
        </div>
      </div>
      {/*section negra */}
      <div className="bg-black h-12"></div>
      {/*pokebola */}
      <div className="bg-white h-20 aspect-square border-[10px] border-black rounded-full absolute -bottom-4 right-0 -translate-x-1/2 after:content-[''] after:h-11 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-black"></div>
    </section>
  );
};

export default Header;
