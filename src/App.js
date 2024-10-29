import logo from './logo.svg';
import './App.css';
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Button from "./components/button";

function App() {
  return (
      <div className="App">
          <Navigation/>
          <section className="landing hero">
              <h1>FROM SEA TO SPACE,<br></br>
                  YOU'LL FIND SLUGS<br></br>
                  EVERYWHERE</h1>
          </section>
          <section className="weare">
              <h3>WE ARE UCSC'S PREMIER ROCKETRY ORGANIZATION</h3>
          </section>
          <section className="projects hero">
              <div className="heroContainer">
                  <h2>PUSHING BOUNDARIES</h2>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                  </p>
                  <Button label="Explore Projects" link="https://example.com/donate"/>
              </div>
          </section>
          <section className="upcoming events">
              <h3>Upcoming Events</h3>
              <div className="eventContainer">
                  SEPTEMBER 29
                  <h4>Cad Workshop - Learn How to CAD using Onshape</h4>
                  Baskin Engineering E2 180
                  5PM-6PM
              </div>
          </section>
          <section className="outreach hero">
              <div className="heroContainer">
                  <h2>EMPOWERING OUR LOCAL COMMUNITY</h2>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam.
                  </p>
                  <Button label="Explore Outreach" link="https://example.com/donate"/>
              </div>          </section>
          <Footer/>
      </div>
  );
}

export default App;
