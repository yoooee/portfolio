import React, {useState}  from 'react';
import type { portfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Modal from '../../UI/Modal/Modal';

function Design() {
  const portfolioItemList: portfolioItem [] = [
    {image: 'smb.jpg', title: "SMB DesignWinner", subtitle: "Won", tags: ['css']}, 
    {image: 'church.jpg'}, 
    {image: 'golf-classic.jpg'}, 
    {image: 'guinness.jpg'}, 
    {image: 'halloween.jpg'}, 
    {image: 'machine.jpg'}, 
    {image: 'mardi-gras.jpg'}
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  
  function cardClickHandler(currentModal: number) {
    setCurrentModal(currentModal);
    setModalIsOpen(true); 
  }

  return (
    <div className="design-cards">
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

export default Design;
