import React, {useEffect, useRef} from 'react';
import Tag from '../../components/Tag/Tag';
import {Layout, PortfolioItem} from '../../interfaces';
import Backdrop from '../Backdrop/Backdrop';
import './modal.scss';

interface ModalProps {
  layout?: Layout;
  show: boolean;
  modalClosed: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  modalNext?: React.MouseEventHandler<HTMLButtonElement>;
  modalPrev?: React.MouseEventHandler<HTMLButtonElement>;
  children: PortfolioItem;

}

function Modal({layout = "portrait", show, modalClosed, modalNext, modalPrev, children}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

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

  if (show) {
    return (
      <>
        <Backdrop clicked={modalClosed} />
        <div tabIndex={-1} className="modal" ref={modalRef}>
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
                    {children.features.map(feature => <li>{feature}</li>)}
                  </ul>
                }
                { children.tags && 
                  <div className="tag-list">
                    { children?.tags?.map((tag) => {
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
            <button  onClick={modalPrev}>Prev</button>
            <button  onClick={modalNext}>Next</button>
          </footer>
        </div>
      </>
    );
  }

  return null;
}

export default Modal;
