import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "pages/MovieDetail";
import SearchResults from "pages/SearchResults";
import "common/reset.css";
import "common/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
        <Route path="/detail/:movieId" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
