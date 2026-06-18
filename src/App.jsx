import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import LanguageProvider from "./components/LanguageProvider.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./pages/About.jsx";
import Business from "./pages/Business.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Results from "./pages/Results.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-ink text-ivory">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diensten" element={<Services />} />
            <Route path="/prijzen" element={<Pricing />} />
            <Route path="/resultaten" element={<Results />} />
            <Route path="/zakelijk" element={<Business />} />
            <Route path="/over-ons" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
