import React, { TouchEvent, useEffect, useRef, useState } from "react";
import Tag from "../../components/Tag/Tag";
import { Layout, PortfolioItem } from "../../interfaces";
import Backdrop from "../Backdrop/Backdrop";
import { AnimatePresence, easeInOut, motion, spring, Transition, useAnimate } from "framer-motion";
import "./modal.scss";

interface ModalProps {
  layout?: Layout;
  show: boolean;
  modalClosed: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  modalNext: React.MouseEventHandler<HTMLButtonElement>;
  modalPrev: React.MouseEventHandler<HTMLButtonElement>;
  children: PortfolioItem;
  className: string;
}

function Modal({
  layout = "portrait",
  show,
  modalClosed,
  modalNext,
  modalPrev,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const minSwipeDistnace = 50;
  const [, animate] = useAnimate();

  const springTransition: Transition<any> = {
    // type: "spring",
    // stiffness: 200,
    // damping: 28,
    duration: 0.5
  }

  const dialogVariants = {
    hidden: {
      // opacity: 0,
      scale: 0.5,
    },
    visible: {
      // opacity: 1,
      scale: 1,
      transition: {
        duration: 0.01,
        scale: { duration: .5, type: "spring", heaviness: 800}
      //   opacity: { duration: 0.5 },
        // scale: { ease: [.17,.67,.83,.67]}
      }
    },
    exit: {
      opactiy: 0,
      scale: 0,
      // transition: {
      //   duration: 0.1,
      //   // opacity: { duration: 0.5},
      //   // scale: { ease: 'backOut', duration: 0.5}
      // },
    },
  };

  useEffect(() => {
    if (show) {
      if (modalRef.current) {
        animate(
          modalRef.current, 
          {opacity: [0, 1]},
          {duration: 0.25},
        );
        animate(
          modalRef.current,
          {scale: [0, 1]},
          {duration: 0.5, type: "spring", stiffness: 400, mass: .85 }
        )
        modalRef.current.focus();
      }
    }
  }, [show, animate]);

  function shouldDisplayArticle() {
    return (
      children.subtitle ||
      children.bodytext ||
      children.features ||
      children.tags
    );
  }

  function touchStartHandler(event: TouchEvent<HTMLDivElement>) {
    setTouchEnd(0);
    setTouchStart(event.targetTouches[0].clientX);
  }

  function touchMoveHandler(event: TouchEvent<HTMLDivElement>) {
    setTouchEnd(event.targetTouches[0].clientX);
  }

  function touchEndHandler() {
    const section = modalRef.current!.querySelector("section");
    const nextButton = modalRef.current!.querySelectorAll("button")[1];
    const prevButton = modalRef.current!.querySelectorAll("button")[2];

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistnace;
    const isRightSwipe = distance < -minSwipeDistnace;

    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? prevButton.click() : nextButton.click();
      section!.scrollTo(0, 0);
    }
  }

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    modalPrev(e);
  };
  const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    modalNext(e);
  };

  if (show) {
    return (
      <>
        <Backdrop clicked={modalClosed} />
        <AnimatePresence>
          {show && <motion.div
            tabIndex={-1}
            className="modal"
            ref={modalRef}
            // variants={dialogVariants}
            // initial="hidden"
            // animate="visible"
            // exit="exit"
            transition={springTransition}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
            key="modal"
          >
            <header>
              <h2>{children.title}</h2>
              <button
                tabIndex={2}
                className="close-button"
                onClick={modalClosed}
              >
                X
              </button>
            </header>
            <motion.div>
              <section className={layout}>
                {shouldDisplayArticle() && (
                  <article>
                    {children.subtitle && <h3>{children.subtitle}</h3>}
                    {children.bodytext && <p>{children.bodytext}</p>}
                    {children.features !== undefined &&
                      children.features.length > 0 && (
                        <ul>
                          {children.features.map((feature, index) =>
                            feature.url === undefined ? (
                              <li key={index}>{feature.text}</li>
                            ) : (
                              <li key={index}>
                                <a
                                  tabIndex={2}
                                  href={feature.url}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {feature.text}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    {children.tags && (
                      <div className="tag-list">
                        {children?.tags?.sort().map((tag, index) => {
                          return <Tag key={index}>{tag}</Tag>;
                        })}
                      </div>
                    )}
                  </article>
                )}
                <div className="primary-image">
                  <img
                    src={require(`../../assets/portfolio-images/${children.image}`)}
                    alt={children.title + " example"}
                  />
                </div>
              </section>
            </motion.div>
            <footer>
              <button tabIndex={2} onClick={(e) => handlePrev(e)}>
                Prev
              </button>
              <button tabIndex={2} onClick={(e) => handleNext(e)}>
                Next
              </button>
            </footer>
          </motion.div>}
        </AnimatePresence>
      </>
    );
  }

  return null;
}

export default Modal;
