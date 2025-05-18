import { Link } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FaFilm className="text-2xl" />
          <span className="text-xl font-bold">Movie Watchlist</span>
        </Link>
        <Link 
          to="/add" 
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
        >
          Add Movie
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;