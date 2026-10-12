import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Blog from "./pages/Blog";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import BlogDetails from "./components/BlogDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AMLCFTPolicy from "./pages/AMLCFTPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import WaitlistPage from "./pages/WaitlistPage"; 
import WaitlistSuccessPage from "./pages/WaitlistListSuccessPage";
import ProductCustomer from "./pages/ProductCustomer";
import ProductBusiness from "./pages/ProductBusiness";
import Pricing from "./pages/Pricing";
import OnlineClassLandingPage from "./pages/OnlineClassLandingPage";
import OnlineClassRegistrationPage from "./pages/OnlineClassRegistrationPage"; // Import the new page
import B2BSignup from "./pages/business/B2BSignup";

function App() {
  return (
    <Router>
       <ScrollToTop /> 
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
        <Route path="/online-class-registration" element={<OnlineClassRegistrationPage />} />
        <Route path="/success" element={<WaitlistSuccessPage />} />
        <Route path="/productcustomer" element={<ProductCustomer />} />
        <Route path="/productbusiness" element={<ProductBusiness />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/online-class" element={<OnlineClassLandingPage />} />
        <Route path="*" element={<Personal />} /> {/* Redirect to Personal page for any unknown routes */}
        <Route path="/b2b-signup" element={<B2BSignup />} />
      </Routes>
    </Router>
);
}

export default App;
