import { useState, useEffect } from 'react';
import { useParams, Link ,useNavigate} from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/api';
import { FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovie(id);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteMovie(id);
      navigate('/');
    } catch (err) {
      console.error('Failed to delete movie:', err);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-blue-500 mb-4">
        <FaArrowLeft className="mr-2" /> Back to List
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              src={movie.posterUrl || 'https://via.placeholder.com/300x450?text=No+Poster'} 
              alt={movie.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${movie.watched ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-800'}`}>
                {movie.watched ? 'Watched' : 'To Watch'}
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-600 text-lg">{movie.director}</p>
              <p className="text-gray-500">{movie.genre} • {movie.releaseYear}</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <Link 
                to={`/edit/${movie._id}`} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center"
              >
                <FaEdit className="mr-2" /> Edit
              </Link>
              <button 
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 flex items-center"
              >
                <FaTrash className="mr-2" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;