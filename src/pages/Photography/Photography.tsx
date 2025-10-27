import { motion } from 'framer-motion';
import { routeVariants } from '../../components/RoutesWithAnimation';
import Portfolio from '../../components/Portfolio/Portfolio';

function Photography() {

  return (
    <motion.div variants={routeVariants} initial="initial" animate="final" className="photography-cards">
      <Portfolio category="photography" />
    </motion.div>
  );
}

export default Photography;
