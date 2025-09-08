import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <div>
      <MovieProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </MovieProvider>

    </div>
  )
}

export default App;
