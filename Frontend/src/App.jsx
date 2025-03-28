import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/hero";
import About from "./pages/about";
import Terms from "./pages/terms";
import Privacy from "./pages/policy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
