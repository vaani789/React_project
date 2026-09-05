import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from "./pages/Services";
import ExecutiveSearch from "./pages/ExecutiveSearch";
import Casestudies from "./pages/Casestudies";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import Community from "./pages/Community";
import ClinicalDelivery from "./pages/ClinicalDelivery";
import ClinicalNetwork from "./pages/ClinicalNetwork";
import CommercialModel from "./pages/CommercialModel";
import CommercialTalent from "./pages/CommercialTalent";
import ClinicalLeadership from "./pages/ClinicalLeadership";
import Governance from "./pages/Governance";
import AIHealth from "./pages/AIHealth";
import CapacityPlanner from "./pages/CapacityPlanner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import JoinUs from "./pages/JoinUs";
import Findjob from "./pages/Findjob";
import Joinbank from "./pages/Joinbank";
import PlexusBackground from "./pages/PlexusBackground";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/executivesearch" element={<ExecutiveSearch/>} />
          <Route path="/casestudies" element={<Casestudies/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/insight" element={<Insights/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/clinicaldelivery" element={<ClinicalDelivery/>} />
          <Route path="/clinicalnetwork" element={<ClinicalNetwork/>} />
          <Route path="/commercialmodel" element={<CommercialModel/>} />
          <Route path="/commercialtalent" element={<CommercialTalent/>} />
          <Route path="/clinicalleadership" element={<ClinicalLeadership/>} />
          <Route path="/governance" element={<Governance/>} />
          <Route path="/aihealth" element={<AIHealth/>} />
          <Route path="/capacityplanner" element={<CapacityPlanner/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/joinus" element={<JoinUs/>} />
          <Route path="/findjob" element={<Findjob/>} />
          <Route path="/joinbank" element={<Joinbank/>} />

          <Route path="/PlexusBackground" element={<PlexusBackground/>} />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;