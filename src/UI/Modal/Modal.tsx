import React, {ReactNode} from 'react';
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
  
  if (show) {
    return (
      <>
        <Backdrop clicked={modalClosed} />
        <div className="modal">
          <header>
            <h2>{children.title}</h2>
            <button className="close-button" onClick={modalClosed} >X</button>
          </header>
          <section className={layout}>
            <article>
              <h3>{children.subtitle}</h3>
              <p>
                {children.bodytext}
              </p>
              {children.features !== undefined && children.features.length > 0 &&
                <ul>
                  {children.features.map(feature => <li>{feature}</li>)}
                </ul>
              }
              <div className="tag-list">
              {children?.tags?.map((tag) => {
                return <Tag>{ tag }</Tag>
              })}
              </div>
            </article>
            <div className="primary-image">
              <img src={require(`../../assets/portfolio-images/${children.image}`)} alt={children.title + ' example'} />
            </div>
          </section>
          <footer>
            <button onClick={modalPrev}>Prev</button>
            <button onClick={modalNext}>Next</button>
          </footer>
        </div>
      </>
    );
  }

  return null;
}

export default Modal;
