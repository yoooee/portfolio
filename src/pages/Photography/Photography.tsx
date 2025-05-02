import React, {useState} from 'react';
import type { portfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Modal from '../../UI/Modal/Modal';

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

  function cardClickHandler(currentModal: number) {
    setCurrentModal(currentModal);
    setModalIsOpen(true); 
  }

  return (
    <div className="photography-cards">
      <Modal show={modalIsOpen} modalClosed={() => setModalIsOpen(false)}>{portfolioItemList[currentModal]}</Modal>
      <CardList>
        {
          portfolioItemList.map((portfolioItem, key) => {
            return (
              <Card key={key} portfolioItem={portfolioItem} clicked={() => cardClickHandler(key)} />
            )
          })
        }
      </CardList>

    </div>
  );
}

export default Photography;
