import React, {useState}  from 'react';
import type { PortfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Modal from '../../UI/Modal/Modal';
import results from '../../portfolio-data.json';

function Design() {
  const portfolioItemList = results.design as PortfolioItem[];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  
  function cardClickHandler(currentModal: number) {
    setCurrentModal(currentModal);
    setModalIsOpen(true); 
    window.scrollTo(0, 0);
  }

  function modalClickNextHandler() {
    if (currentModal < portfolioItemList.length - 1) {
      cardClickHandler(currentModal + 1);
    } else {
      cardClickHandler(0);
    }
  }

  function modalClickPrevHandler() {
    if (currentModal > 0) {
      cardClickHandler(currentModal - 1);
    } else {
      cardClickHandler(portfolioItemList.length - 1);
    }

  }

  return (
    <div className="design-cards">
      <Modal 
        show={modalIsOpen} 
        modalClosed={() => setModalIsOpen(false)}
        modalNext={() => modalClickNextHandler()}
        modalPrev={() => modalClickPrevHandler()}
      >{portfolioItemList[currentModal]}</Modal>
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
