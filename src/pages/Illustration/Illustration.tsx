import React from 'react';
import type { portfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';

function Illustration() {
  const portfolioItemList: portfolioItem [] = [
    {image: 'arnold.jpg'}, 
    {image: 'spawn.jpg'}, 
    {image: 'super-heroine.jpg'}, 
    {image: 'wolverine.jpg'}, 
  ];

  return (
    <div className="design-cards">
      <CardList>
        {portfolioItemList.map((portfolioItem, key) => <Card key={key} thumbnail={portfolioItem.image}> </Card>)}
      </CardList>

    </div>
  );
}

export default Illustration;
