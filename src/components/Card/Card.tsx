import React, {ReactNode} from 'react';

import './card.scss';

interface CardProps {
  thumbnail: string;
  children: ReactNode;
}

function Card({thumbnail, children}: CardProps) {
  return (
    <div className="card">
      <div className="thumbnail" 
        style={{
          backgroundImage: `url(${require(`../../assets/portfolio-images/${thumbnail}`)})`
        }}>
      </div>
      {children}
    </div>
  );
}

export default Card;
