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
              we are someething
          </section>
          <section className="projects hero">
              <h2>PUSHING BOUNDARIES</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam.
              </p>
              <Button label="Explore Projects" link="https://example.com/donate"/>
          </section>
          <section className="upcoming events">
              upcoming events
          </section>
          <section className="outreach hero">
              outreach
          </section>
          <Footer/>
      </div>
  );
}

export default App;
