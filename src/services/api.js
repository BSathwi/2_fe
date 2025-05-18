import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllMovies = async () => {
  return await axios.get(API_URL);
};

export const getMovie = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createMovie = async (movieData) => {
  return await axios.post(API_URL, movieData);
};

export const updateMovie = async (id, movieData) => {
  return await axios.put(`${API_URL}/${id}`, movieData);
};

export const deleteMovie = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};