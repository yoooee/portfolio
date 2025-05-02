import React from 'react';
import './backdrop.scss';

interface BackdropProps {
  clicked: React.MouseEventHandler<HTMLDivElement>;
}

function Backdrop({clicked}: BackdropProps) {
  return <div className="backdrop" onClick={clicked} />;
}

export default Backdrop;
