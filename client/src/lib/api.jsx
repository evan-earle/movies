import axios from "axios";

export default class TheMovieDbApi {
  getPopularMovies = async (page = 1) => {
    try {
      const data = await axios.get(`/api/popularMusic/${page}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  searchMovies = async (query) => {
    try {
      const data = await axios.get(`/api/searchMusic/${query}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  getMovie = async (id) => {
    try {
      const data = await axios.get(`/api/movie/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  getGenres = async () => {
    try {
      const data = await axios.get(`/api/genre/`);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
}
