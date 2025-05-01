import React from 'react';
import type { portfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';

function Design() {
  const portfolioItemList: portfolioItem [] = [
    {image: 'church.jpg'}, 
    {image: 'golf-classic.jpg'}, 
    {image: 'guinness.jpg'}, 
    {image: 'halloween.jpg'}, 
    {image: 'machine.jpg'}, 
    {image: 'mardi-gras.jpg'}
  ];

  return (
    <div className="design-cards">
      <CardList>
        {portfolioItemList.map((portfolioItem, key) => <Card key={key} thumbnail={portfolioItem.image}> </Card>)}
      </CardList>

    </div>
  );
}

export default Design;
