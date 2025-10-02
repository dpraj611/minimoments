import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import VisionCurriculum from './pages/VisionCurriculum';
import OurEthos from './pages/OurEthos';
import Funding from './pages/Funding';
import OurRooms from './pages/OurRooms';
import Gallery from './pages/Gallery';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import CookiesPolicy from './pages/CookiesPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NurseryTermsConditions from './pages/NurseryTermsConditions';
import CompanyPolicies from './pages/CompanyPolicies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-gold-50">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/vision-curriculum" element={<VisionCurriculum />} />
            <Route path="/ethos" element={<OurEthos />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/our-rooms" element={<OurRooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/nursery-terms-conditions" element={<NurseryTermsConditions />} />
            <Route path="/company-policies" element={<CompanyPolicies />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;