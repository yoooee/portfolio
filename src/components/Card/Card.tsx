import React, {ReactElement, ReactNode} from 'react';

import './card.scss';

interface CardProps {
  thumbnail: string;
  children: ReactNode;
}

function Card({thumbnail, children}: CardProps) {
  return (
    <div className="card">
      <div className="thumbnail" style={{backgroundImage: `url('${thumbnail}')`}}></div>
{children}
    </div>
  );
}

export default Card;
