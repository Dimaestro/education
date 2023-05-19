import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown); 
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
        this.props.onClose();
      }
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <div className={styles.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={styles.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot,
    )
  }
}

export default Modal;