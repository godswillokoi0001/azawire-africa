import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Blog from "./pages/Blog";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import BlogDetails from "./components/BlogDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AMLCFTPolicy from "./pages/AMLCFTPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import WaitlistPage from "./pages/WaitlistPage"; // Corrected import name
import WaitlistSuccessPage from "./pages/WaitlistListSuccessPage";
// import Pricing from "./pages/Pricing";

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
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/amlcftpolicy" element={<AMLCFTPolicy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/success" element={<WaitlistSuccessPage />} />
        {/* <Route path="/pricing" element={<Pricing /> } /> */}
      </Routes>
    </Router>
  );
}

export default App;
