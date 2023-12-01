import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies, resetState } from "../redux/movies";
import { Loader } from "../components/Loader";
import { Movies } from "../components/Movies";

export const PopularMovies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getPopularMovies());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return movies.page === 0 && movies.isFetching ? (
    <Loader />
  ) : (
    <Movies movies={movies} genres={genres} />
  );
};
