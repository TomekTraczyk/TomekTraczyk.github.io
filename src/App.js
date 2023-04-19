import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/404Page";
import Gallery from "./pages/Gallery";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
