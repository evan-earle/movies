import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PopularMovies } from "./pages/PopularMovies";
import { MovieDetails } from "./pages/MovieDetails";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PopularMovies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
