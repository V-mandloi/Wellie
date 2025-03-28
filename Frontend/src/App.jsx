import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/hero";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
