import { motion } from 'framer-motion';
import { routeVariants } from '../../components/RoutesWithAnimation';
import Portfolio from '../../components/Portfolio/Portfolio';

function Design() {

  return (
    <motion.div variants={routeVariants} initial="initial" animate="final" className="design-cards">
      <Portfolio category="design" />
    </motion.div>
  );
}

export default Design;
