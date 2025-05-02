import React, {ReactNode} from 'react';
import {portfolioItem} from '../../interfaces';
import Backdrop from '../Backdrop/Backdrop';
import './modal.scss';

interface ModalProps {
  show: boolean;
  modalClosed: React.MouseEventHandler<HTMLDivElement>;
  children: portfolioItem;
}

function Modal({show, modalClosed, children}: ModalProps) {
  
  if (show) {
    return (
      <>
        <Backdrop clicked={modalClosed} />
        <div className="modal">
          {children.image}
          {children.title}
          {children.subtitle}
          {children.tags}
        </div>
      </>
    );
  }

  return null;
}

export default Modal;
