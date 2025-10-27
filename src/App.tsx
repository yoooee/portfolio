import { NavLink } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import LogoMobile from "./assets/logo-mobile.svg";
import LogoDesktop from "./assets/logo-desktop.svg";
import { AnimatePresence } from "framer-motion";
import LocationProvider from "./components/LocationProvider";
import RoutesWithAnimation from "./components/RoutesWithAnimation";
import "./App.scss";

function App() {
  return (
    <div className="App">
        <header>
          <NavLink to="/">
            <img
              className="logo-mobile"
              src={LogoMobile}
              alt="The Portfolio of Josef Staroba"
            />
            <img
              className="logo-desktop"
              src={LogoDesktop}
              alt="The Portfolio of Josef Staroba"
            />
          </NavLink>
        </header>
        <nav>
          <Navigation />
        </nav>
        <main className="portfolio">
          {/* <Routes>
            <Route path="/design" element={<Design />} />
            <Route path="/development" element={<Development />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/" element={<Home />} />
          </Routes> */}
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
        </main>
    </div>
  );
}

export default App;
