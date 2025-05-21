import React from 'react';
import Style from './Modal.module.css'
  
 const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
        <div className={Style.modal_overlay}> {/* Use Style.modal_overlay */}
            <div className={Style.modal_content}> {/* Use Style.modal_content */}
                <h2 className={Style.modal_content_title}>{title}<br/>De <br/>produtos</h2>
                {children} {/* Renderize a prop children */}
            </div>
        </div>
    )};

    export default Modal;

