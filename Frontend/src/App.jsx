
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>

