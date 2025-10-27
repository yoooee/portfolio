import { useState, useEffect, useCallback } from "react";
import type { PortfolioItem } from "../../interfaces";
import { Category } from "../../interfaces";
import results from "../../portfolio-data.json";
import {
  AnimatePresence,
  useAnimate,
  Variants,
} from "framer-motion";
import Modal from "../../UI/Modal/Modal";

import "./portfolio.scss";
import MotionCardList from "../../components/CardList/CardList";
import MotionCard from "../../components/Card/Card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const portfolioItemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, type: "spring", stiffness: 100 },
  },
};
interface PortfolioProps {
  category: Category;
}

function Portfolio({ category }: PortfolioProps) {
  const portfolioItemList = results[category] as PortfolioItem[];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

  const [source, animate] = useAnimate();

  function cardClickHandler(currentModal: number) {
    setCurrentModal(currentModal);
    setModalIsOpen(true);
    window.scrollTo(0, 0);
  }

  const modalClickNextHandler = useCallback(() => {
    if (currentModal < portfolioItemList.length - 1) {
      setCurrentModal(currentModal + 1);
      animate(
        ".modal section",
        { x: ["100vh", "0vh"] },
        { duration: 0.5, type: "spring" }
      );

    } else {
      setCurrentModal(0);
      animate(
        ".modal section",
        { x: ["100vh", "0vh"] },
        { duration: 0.5, type: "spring" }
      );
    }
  }, [currentModal, portfolioItemList, animate]);

  const modalClickPrevHandler = useCallback(() => {
    if (currentModal > 0) {
      setCurrentModal(currentModal - 1);
      animate(
        ".modal section",
        { x: ["-100vh", "0vh"] },
        { duration: 0.5, type: "spring" }
      );
    } else {
      setCurrentModal(portfolioItemList.length - 1);
      animate(
        ".modal section",
        { x: ["-100vh", "0vh"] },
        { duration: 0.5, type: "spring" }
      );
    }
  }, [currentModal, portfolioItemList, animate]);

  const keyPressHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        modalClickNextHandler();
      }

      if (event.key === "ArrowLeft") {
        modalClickPrevHandler();
      }

      if (event.key === "Escape") {
        setModalIsOpen(false);
      }
    },
    [modalClickNextHandler, modalClickPrevHandler]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler);

    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);

  return (
    <div ref={source}>
      <AnimatePresence>
        {modalIsOpen && (
          <Modal
            className="stuff"
            layout={portfolioItemList[currentModal].layout}
            show={modalIsOpen}
            modalClosed={() => setModalIsOpen(false)}
            modalNext={() => modalClickNextHandler()}
            modalPrev={() => modalClickPrevHandler()}
          >
            {portfolioItemList[currentModal]}
          </Modal>
        )}
      </AnimatePresence>
      <h1>{category}</h1>
      <MotionCardList
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {portfolioItemList.map((portfolioItem, key) => {
          return (
            <MotionCard
              key={key}
              portfolioItem={portfolioItem}
              clicked={() => cardClickHandler(key)}
              variants={portfolioItemVariants}
            />
          );
        })}
      </MotionCardList>
    </div>
  );
}

export default Portfolio;
