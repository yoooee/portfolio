import React, {ReactNode} from 'react';
import Tag from '../../components/Tag/Tag';
import {PortfolioItem} from '../../interfaces';
import Backdrop from '../Backdrop/Backdrop';
import './modal.scss';

interface ModalProps {
  show: boolean;
  modalClosed: React.MouseEventHandler<HTMLDivElement>;
  children: PortfolioItem;
}

function Modal({show, modalClosed, children}: ModalProps) {
  
  if (show) {
    return (
      <>
        <Backdrop clicked={modalClosed} />
        <div className="modal">
          <header>
            <h2>{children.title}</h2>
          </header>
          <section>
            <article>
              <h3>{children.subtitle}</h3>
              <p>
                {children.bodytext}
              </p>
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
        </div>
      </>
    );
  }

  return null;
}

export default Modal;
