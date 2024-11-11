import './index.css';
import { Routes, Route } from 'react-router-dom';


// Webpages
import Home from "./pages/home";
import Projects from "./pages/projects";
import VehicleSystems from "./pages/irec/vehicle-systems";
import Payload from "./pages/irec/payload";
import Avionics from "./pages/technical-projects/avionics";

import Leadership from "./pages/technical-projects/avionics";
import Outreach from "./pages/outreach";

// Components
import Navigation from "./components/navigation";
import Footer from "./components/footer";



function App() {
  return (
      <div className="App">
          <Navigation/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/irec/vehicle-systems" element={<VehicleSystems/>}/>
              <Route path="/irec/payload" element={<Payload/>} />
              <Route path="/technical-projects/avionics" element={<Avionics/>}/>
              <Route path="/technical-projects/avionics" element={<Leadership/>}/>
              <Route path="/outreach" element={<Outreach/>}/>
              {/*<Route path="/technical-projects/avionics" element={<Avionics/>}/>*/}
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
