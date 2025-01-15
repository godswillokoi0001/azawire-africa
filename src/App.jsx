import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Blog from "./pages/Blog";
import About from "./pages/About";
import FAQ from "./pages/FAQ";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Personal />} /> {/* Default page */}
        <Route path="/personal" element={<Personal />} />
        <Route path="/business" element={<Business />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
