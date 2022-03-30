import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Import from "./pages/import";
import TryOn from "./pages/tryon";
import Wardrobe from "./pages/wardrobe";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Wardrobe />} />
        <Route path="/about" element={<About />} />
        <Route path="/import" element={<Import />} />
        <Route path="/tryon" element={<TryOn />} />
      </Routes>
    </Router>
  );
}
export default App;
