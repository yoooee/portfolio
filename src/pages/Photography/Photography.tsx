import React from 'react';
import type { portfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';

function Photography() {
  const portfolioItemList: portfolioItem [] = [
    {image: 'arch.jpg'}, 
    {image: 'cat.jpg'}, 
    {image: 'clouds.jpg'}, 
    {image: 'door.jpg'}, 
    {image: 'fence.jpg'}, 
    {image: 'giordanos.jpg'},
    {image: 'lamp.jpg'},
    {image: 'leaves.jpg'},
    {image: 'light.jpg'},
    {image: 'portrait.jpg'},
    {image: 'portrait2.jpg'},
    {image: 'sign.jpg'},
  ];

  return (
    <div className="photography-cards">
      <CardList>
        {portfolioItemList.map((portfolioItem, key) => <Card key={key} thumbnail={portfolioItem.image}> </Card>)}
      </CardList>

    </div>
  );
}

export default Photography;
