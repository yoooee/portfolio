import React, {useState}  from 'react';
import type { PortfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Modal from '../../UI/Modal/Modal';
import results from '../../portfolio-data.json';
import Portfolio from '../../components/Portfolio/Portfolio';

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
    console.log('current ', currentModal);
    if (currentModal < portfolioItemList.length - 1) {
      setCurrentModal(currentModal + 1);
    } else {
      setCurrentModal(0);
    }
  }

  function modalClickPrevHandler() {
    if (currentModal > 0) {
      setCurrentModal(currentModal - 1);
    } else {
      setCurrentModal(portfolioItemList.length - 1);
    }
  }

  return (
    <div className="design-cards">
      <Portfolio category="design" />
      <Modal 
        layout={portfolioItemList[currentModal].layout}
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
