import './Css/Loader.css';

const Loader = () => {
  return (
    <section className="min-h-screen bg-white flex justify-center flex-col items-center">
      <div className="loader"></div>
      <p className="text-lg pt-2 font-medium">Loading...</p>
    </section>
  );
};

export default Loader;
