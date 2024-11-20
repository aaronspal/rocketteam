import './index.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/scrollToTop";


// Webpages
import Home from "./pages/home";
import Projects from "./pages/projects";

import VehicleSystems from "./pages/irec/vehicle-systems";
import Payload from "./pages/irec/payload";
import Avionics from "./pages/technical-projects/avionics";
import GroundControlSystems from "./pages/technical-projects/ground-control-systems";
import ThrustVectorControl from "./pages/technical-projects/thrust-vector-control";
import Simulations from "./pages/technical-projects/simulations";

import Outreach from "./pages/outreach";
import Media from "./pages/outreach/media";
import CurrentLeadership from "./pages/leadership/current-leadership";
import Alumni from "./pages/leadership/alumni";
import NewMembers from "./pages/new-members/new-members";

// Components
import Navigation from "./components/navigationNew/";
import Footer from "./components/footer";




function App() {
    return (
        <div className="App">
            <ScrollToTop/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/irec/vehicle-systems" element={<VehicleSystems/>}/>
                <Route path="/irec/payload" element={<Payload/>} />
                <Route path="/technical-projects/avionics" element={<Avionics/>}/>
                <Route path="/technical-projects/ground-control-systems" element={<GroundControlSystems/>}/>
                <Route path="/technical-projects/thrust-vector-control" element={<ThrustVectorControl/>}/>
                <Route path="/technical-projects/simulations" element={<Simulations/>}/>
                <Route path="/outreach" element={<Outreach/>}/>
                <Route path="/outreach/media" element={<Media/>}/>
                <Route path="/leadership/current-leadership" element={<CurrentLeadership/>}/>
                <Route path="/leadership/alumni" element={<Alumni/>}/>
                <Route path="/new-members/new-members" element={<NewMembers/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
