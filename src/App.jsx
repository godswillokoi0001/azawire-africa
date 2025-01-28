import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Blog from "./pages/Blog";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import BlogSection from "./components/BlogSection";
import BlogDetails from "./components/BlogDetails";
import Waitlist from "./pages/Waitlist";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/business" element={<Business />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<BlogSection />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
