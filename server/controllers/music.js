import axios from "axios";

export const getPopularMovies = async (req, res, next) => {
  const page = req.params.page;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page}`
    );

    const data = response.data;
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`
    );

    const data = response.data;
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};
