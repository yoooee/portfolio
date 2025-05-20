import React, {TouchEvent, useEffect, useRef, useState} from 'react';
import Tag from '../../components/Tag/Tag';
import {Layout, PortfolioItem} from '../../interfaces';
import Backdrop from '../Backdrop/Backdrop';
import './modal.scss';

interface ModalProps {
  layout?: Layout;
  show: boolean;
  modalClosed: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  modalNext: React.MouseEventHandler<HTMLButtonElement>;
  modalPrev: React.MouseEventHandler<HTMLButtonElement>;
  children: PortfolioItem;

}

function Modal({layout = "portrait", show, modalClosed, modalNext, modalPrev, children}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const minSwipeDistnace = 50;

  useEffect(() => {
    if (show) {
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }
  }, [show]);

  function shouldDisplayArticle() {
    return children.subtitle || children.bodytext || children.features || children.tags;
  }

  function touchStartHandler(event: TouchEvent<HTMLDivElement>) {
    setTouchEnd(0);
    setTouchStart(event.targetTouches[0].clientX);
  }

  function touchMoveHandler(event: TouchEvent<HTMLDivElement>) {
    setTouchEnd(event.targetTouches[0].clientX);
  }

  function touchEndHandler() {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistnace;
    const isRightSwipe = distance < -minSwipeDistnace;

    if (isLeftSwipe || isRightSwipe) {
      const nextButton = modalRef.current!.querySelectorAll('button')[1];
      const prevButton = modalRef.current!.querySelectorAll('button')[2];

      isLeftSwipe ? prevButton.click() : nextButton.click();
    }
  }
  

  if (show) {
    return (
      <>
        <Backdrop clicked={modalClosed} />
        <div 
          tabIndex={-1} 
          className="modal" 
          ref={modalRef} 
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onTouchEnd={touchEndHandler}
        >
          <header>
            <h2>{children.title}</h2>
            <button tabIndex={2} className="close-button" onClick={modalClosed} >X</button>
          </header>
          <section className={layout}>
            {shouldDisplayArticle() && 
              <article>
                { children.subtitle && <h3>{children.subtitle}</h3> }
                { children.bodytext && <p>{children.bodytext}</p> }
                {children.features !== undefined && children.features.length > 0 &&
                  <ul>
                    {children.features.map(feature => 
                      feature.url === undefined ? 
                        <li>{ feature.text }</li> :
                        <li><a tabIndex={2} href={feature.url} rel="noreferrer" target="_blank">{feature.text}</a></li>
                    )}
                  </ul>
                }
                { children.tags && 
                  <div className="tag-list">
                    { children?.tags?.sort().map((tag) => {
                        return <Tag>{ tag }</Tag>
                      })
                    }
                  </div>
                }
              </article>
            }
            <div className="primary-image">
              <img src={require(`../../assets/portfolio-images/${children.image}`)} alt={children.title + ' example'} />
            </div>
          </section>
          <footer>
            <button tabIndex={2} className="prev-button" onClick={modalPrev}>Prev</button>
            <button tabIndex={2} className="next-button" onClick={modalNext}>Next</button>
          </footer>
        </div>
      </>
    );
  }

  return null;
}

export default Modal;
