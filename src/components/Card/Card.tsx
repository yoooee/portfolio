import React, {MouseEventHandler} from 'react';
import {PortfolioItem} from '../../interfaces';

import './card.scss';

interface CardProps {
  portfolioItem: PortfolioItem;
  clicked: MouseEventHandler<HTMLDivElement>;
}

function Card({portfolioItem, clicked}: CardProps) {
  return (
    <div className="card" onClick={clicked}>
      <button className="thumbnail" 
        style={{
          backgroundImage: `url(${require(`../../assets/portfolio-images/${portfolioItem.image}`)})`
        }}>
      </button>
    </div>
  );
}

export default Card;
