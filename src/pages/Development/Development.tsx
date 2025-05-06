import React, {useState} from 'react';
import type { PortfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Modal from '../../UI/Modal/Modal';
import results from '../../portfolio-data.json';

function Development() {
  const portfolioItemList = results.development as PortfolioItem[];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

  function cardClickHandler(currentModal: number) {
    setCurrentModal(currentModal);
    setModalIsOpen(true); 
    window.scrollTo(0, 0);
  }

  return (
    <div className="development-cards">
      <Modal layout={portfolioItemList[currentModal].layout} show={modalIsOpen} modalClosed={() => setModalIsOpen(false)}>{portfolioItemList[currentModal]}</Modal>
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
