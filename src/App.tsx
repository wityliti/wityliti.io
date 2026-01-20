import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import CaseStudies from "@/pages/CaseStudies";
import About from "@/pages/About";
import Products from "@/pages/Products";
import CyberSecurity from "@/pages/CyberSecurity";
import EcoDigitalPlatforms from "@/pages/EcoDigitalPlatforms";
import IoTSolutions from "@/pages/IoTSolutions";
import SustainabilitySoftware from "@/pages/SustainabilitySoftware";
import ESGCompliance from "@/pages/ESGCompliance";
import CloudSecurity from "@/pages/CloudSecurity";
import ResilienceOps from "@/pages/ResilienceOps";
import Contact from "@/pages/Contact";
import AfforestationProduct from "@/pages/products/Afforestation";
import CykloProduct from "@/pages/products/Cyklo";
import WityLogixProduct from "@/pages/products/WityLogix";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Blog from "@/pages/Blog";
import IsoftPartnership from "@/pages/blog/IsoftPartnership";
import CyfinitiAcquisition from "@/pages/blog/CyfinitiAcquisition";
import TesePartnership from "@/pages/blog/TesePartnership";
import AfforestationLaunch from "@/pages/blog/AfforestationLaunch";

import TeseCaseStudy from "@/pages/case-studies/Tese";
import OgowCaseStudy from "@/pages/case-studies/Ogow";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/tese" element={<TeseCaseStudy />} />
        <Route path="/case-studies/ogow" element={<OgowCaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/afforestation" element={<AfforestationProduct />} />
        <Route path="/products/cyklo" element={<Navigate to="/" replace />} />
        <Route path="/products/witylogix" element={<WityLogixProduct />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/eco-digital-platforms" element={<EcoDigitalPlatforms />} />
        <Route path="/sustainability-software" element={<SustainabilitySoftware />} />
        <Route path="/esg-compliance" element={<ESGCompliance />} />
        <Route path="/cloud-security" element={<CloudSecurity />} />
        <Route path="/resilience-ops" element={<ResilienceOps />} />
        <Route path="/iot-solutions" element={<IoTSolutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/isoft-partnership" element={<IsoftPartnership />} />
        <Route path="/blog/cyfiniti-acquisition" element={<CyfinitiAcquisition />} />
        <Route path="/blog/tese-partnership" element={<TesePartnership />} />
        <Route path="/blog/afforestation-launch" element={<AfforestationLaunch />} />
      </Routes>
    </Router>
  );
}
