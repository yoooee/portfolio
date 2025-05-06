import {useState}  from 'react';
import type { PortfolioItem } from '../../interfaces';
import {Category} from '../../interfaces';
import results from '../../portfolio-data.json';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Modal from '../../UI/Modal/Modal';

interface PortfolioProps {
  category: Category;
}

function Portfolio({category}: PortfolioProps) {
  const portfolioItemList = results[category] as PortfolioItem[];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

  function cardClickHandler(currentModal: number) {
    setCurrentModal(currentModal);
    setModalIsOpen(true); 
    window.scrollTo(0, 0);
  }

  function modalClickNextHandler() {
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
    <>
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
    </>)
}

export default Portfolio;
