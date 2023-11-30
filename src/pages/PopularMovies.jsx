import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies, resetState } from "../redux/movies";
import { Loader } from "../components/Loader";

export const PopularMovies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getPopularMovies());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return movies.page === 0 && movies.isFetching ? <Loader /> : <></>;
};
