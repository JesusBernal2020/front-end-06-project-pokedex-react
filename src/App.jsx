import { Route, Routes } from 'react-router-dom';
import './App.css';
import Pokedex from './Pages/Pokedex';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import PokemonId from './Pages/PokemonId';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import Loader from './components/Home/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Cambia el estado a falso después de cierto tiempo (por ejemplo, 2000 ms = 2 segundos)
    }, 4000); // Tiempo en milisegundos

    return () => clearTimeout(loadingTimer); // Limpia el temporizador al desmontar el componente
  }, []);

  return (
    <section className='font-["Inter"]'>
      {isLoading ? (
        // Mostrar la pantalla de carga mientras isLoading es true
        <Loader />
      ) : (
        // Cuando isLoading es false, mostrar el contenido principal
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:pokemonName" element={<PokemonId />} />
          </Route>
        </Routes>
      )}
    </section>
  );
}

export default App;
