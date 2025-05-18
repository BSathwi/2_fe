import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/api';

const AddMovie = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      await createMovie(formData);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add movie');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Movie</h1>
      {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">{error}</div>}
      <MovieForm onSubmit={handleSubmit} buttonText="Add Movie" />
    </div>
  );
};

export default AddMovie;