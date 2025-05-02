import React, {useState} from 'react';
import type { portfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Modal from '../../UI/Modal/Modal';

function Development() {
  const portfolioItemList: portfolioItem [] = [
    {image: 'cmss-interface.gif'}, 
    {image: 'spawn.jpg'}, 
    {image: 'super-heroine.jpg'}, 
    {image: 'wolverine.jpg'}, 
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

  function cardClickHandler(currentModal: number) {
    setCurrentModal(currentModal);
    setModalIsOpen(true); 
  }

  return (
    <div className="development-cards">
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

export default Development;
