import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { getMovie, updateMovie } from '../services/api';

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleSubmit = async (formData) => {
    try {
      await updateMovie(id, formData);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update movie');
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Edit Movie</h1>
      {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">{error}</div>}
      <MovieForm initialData={movie} onSubmit={handleSubmit} buttonText="Update Movie" />
    </div>
  );
};

export default EditMovie;