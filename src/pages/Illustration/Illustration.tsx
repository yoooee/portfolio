import { motion } from 'framer-motion';
import { routeVariants } from '../../components/RoutesWithAnimation';
import Portfolio from '../../components/Portfolio/Portfolio';

function Illustration() {

  return (
    <motion.div variants={routeVariants} initial="initial" animate="final" className="illustration-cards">
      <Portfolio category="illustration" />
    </motion.div>
  );
}

export default Illustration;
