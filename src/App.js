import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Game from "./views/Game";
import Home from "./views/Home";
import Instructions from "./views/Instructions";
import Educational from "./views/Educational";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/game" element={<Game />} />
          <Route path="/educational" element={<Educational />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
