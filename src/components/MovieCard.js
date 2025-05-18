import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MovieCard = ({ movie, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img 
          src={movie.posterUrl || 'https://via.placeholder.com/300x450?text=No+Poster'} 
          alt={movie.title} 
          className="w-full h-64 object-cover"
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${movie.watched ? 'bg-green-500' : 'bg-yellow-500'}`}>
          {movie.watched ? 'Watched' : 'To Watch'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 truncate">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-1">{movie.director}</p>
        <p className="text-gray-500 text-xs mb-2">{movie.genre} • {movie.releaseYear}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/edit/${movie._id}`} 
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEdit className="inline mr-1" /> Edit
          </Link>
          <button 
            onClick={() => onDelete(movie._id)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash className="inline mr-1" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;