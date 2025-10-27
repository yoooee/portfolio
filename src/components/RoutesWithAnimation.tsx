import { Routes, Route, useLocation } from "react-router";
import Design from "../pages/Design/Design";
import Development from "../pages/Development/Development";
import Illustration from "../pages/Illustration/Illustration";
import Photography from "../pages/Photography/Photography";
import Home from "../pages/Home/Home";

export const routeVariants = {
    initial: {
      // y: '10vh',
      opacity: 0
    },
    final: {
      // y: '0vh'
      opacity: 1
    }
  }

const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/design" element={<Design />} />
      <Route path="/development" element={<Development />} />
      <Route path="/illustration" element={<Illustration />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesWithAnimation;
