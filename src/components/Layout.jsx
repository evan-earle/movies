import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { styled } from "@mui/system";
import { SearchMoviesSuggestions } from "../pages/SearchMoviesSuggestions";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Img = styled("img")({
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  width: 500,
  maxWidth: "100%",
});

const LayoutWrapper = styled("div")(({ theme }) => ({
  margin: 24,
  width: "auto",
  [theme.breakpoints.up("lg")]: {
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.breakpoints.values.lg,
  },
}));

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LayoutWrapper>
        <Link to="/">
          <Img src={logo} alt="The movie db" />
        </Link>
        <SearchMoviesSuggestions />
        {children}
      </LayoutWrapper>
    </ThemeProvider>
  );
};
