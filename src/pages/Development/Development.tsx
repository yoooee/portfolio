import { motion } from 'framer-motion';
import { routeVariants } from '../../components/RoutesWithAnimation';
import Portfolio from '../../components/Portfolio/Portfolio';

function Development() {

  return (
    <motion.div variants={routeVariants} initial="initial" animate="final" className="development-cards">
      <Portfolio category="development" />
    </motion.div>
  );
}

export default Development;
