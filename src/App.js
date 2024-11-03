import './index.css';

// Webpages
import Home from "./pages/home";
import Projects from "./pages/projects";
import VehicleSystems from "./pages/irec/vehicle-systems";
import Recovery from "./pages/irec/recovery";
import Payload from "./pages/irec/payload";

// Components
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Routes, Route } from 'react-router-dom';
import Avionics from "./pages/technical-projects/avionics";


function App() {
  return (
      <div className="App">
          <Navigation/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/irec/vehicle-systems" element={<VehicleSystems />} />
              <Route path="/irec/vehicle-systems" element={<VehicleSystems />} />
              <Route path="/irec/recovery" element={<Recovery />} />
              <Route path="/irec/payload" element={<Payload />} />
              <Route path="/technical-projects/avionics" element={<Avionics />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
