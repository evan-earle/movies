import axios from "axios";

export default class TheMovieDbApi {
  apiBaseUrl = "https://api.themoviedb.org/3";
  apiKey;

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  // getPopularMovies = async (page = 1) => {
  //   const response = await fetch(
  //     `${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
  //   );
  //   console.log(response);
  //   return response.json();
  // };

  getPopularMovies = async () => {
    try {
      const data = await axios.get(`/api/music`);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  searchMovies = async (query) => {
    const response = await fetch(
      `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
    );

    return response.json();
  };

  getMovie = async (id) => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=recommendations`
    );

    return response.json();
  };

  getGenres = async () => {
    const response = await fetch(
      `${this.apiBaseUrl}/genre/movie/list?api_key=${this.apiKey}`
    );

    return response.json();
  };
}
