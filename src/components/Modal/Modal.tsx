import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
