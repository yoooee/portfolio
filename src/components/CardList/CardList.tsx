import React, {ReactNode} from 'react';

import './card-list.scss';
import { motion } from 'framer-motion';

interface CardListProps {
  children: ReactNode,
}
function CardList({children, ...props}: CardListProps) {
  return (
    <div className="card-list" {...props}>{children}</div>
  );
}

const MotionCardList = motion(CardList);
export default MotionCardList;
