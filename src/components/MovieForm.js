import { useState } from 'react';

const MovieForm = ({ initialData = {}, onSubmit, buttonText = 'Submit' }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    director: initialData.director || '',
    genre: initialData.genre || '',
    releaseYear: initialData.releaseYear || '',
    posterUrl: initialData.posterUrl || '',
    watched: initialData.watched || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="title">
          Title*
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="director">
          Director
        </label>
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="genre">
          Genre
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="releaseYear">
          Release Year*
        </label>
        <input
          type="number"
          id="releaseYear"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          required
          min="1888"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="posterUrl">
          Poster URL
        </label>
        <input
          type="url"
          id="posterUrl"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="watched"
            checked={formData.watched}
            onChange={handleChange}
            className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700">Watched</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default MovieForm;