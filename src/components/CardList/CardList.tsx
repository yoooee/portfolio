import React, {ReactNode} from 'react';

import './card-list.scss';

interface CardListProps {
  children: ReactNode
}
function CardList({children}: CardListProps) {
  return (
    <div className="card-list">{children}</div>
  );
}

export default CardList;
