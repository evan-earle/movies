import { Suggestion } from "../components/Suggestion";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const SearchMoviesSuggestions = () => {
  const { search } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);
  return <Suggestion movies={search} genres={genres} />;
};
