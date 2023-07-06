import Cafe from "components/Cafe";
import Landing from "components/Landing";
import Main from "components/Main";
import Seat from "components/Seat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/seat" element={<Seat />} />
      </Routes>
    </Router>
  );
}
export default App;
