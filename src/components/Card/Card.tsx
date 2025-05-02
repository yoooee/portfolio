import React, {MouseEventHandler, ReactNode} from 'react';
import {portfolioItem} from '../../interfaces';

import './card.scss';

interface CardProps {
  portfolioItem: portfolioItem;
  clicked: MouseEventHandler<HTMLDivElement>;
}

function Card({portfolioItem, clicked}: CardProps) {
  return (
    <div className="card" onClick={clicked}>
      <div className="thumbnail" 
        style={{
          backgroundImage: `url(${require(`../../assets/portfolio-images/${portfolioItem.image}`)})`
        }}>
      </div>
    </div>
  );
}

export default Card;
