import React, {MouseEventHandler} from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {PortfolioItem} from '../../interfaces';

import './card.scss';

interface CardProps {
  portfolioItem: PortfolioItem;
  clicked: MouseEventHandler<HTMLDivElement>;
}


function Card({portfolioItem, clicked, ...props}: CardProps) {
  return (
    <div className="card" onClick={clicked} { ...props}
    >
      <motion.button 
        className="thumbnail" 
        style={{
          backgroundImage: `url(${require(`../../assets/portfolio-images/${portfolioItem.image}`)})`
        }}
        whileHover={{ scale: 1.1, border: "3px solid var(--color-accent)" }}
        whileFocus={{ scale: 1.1, border: "3px solid var(--color-accent)" }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200  }}
        >
      </motion.button>
    </div>
  );
}

const MotionCard = motion(Card);
export default MotionCard;