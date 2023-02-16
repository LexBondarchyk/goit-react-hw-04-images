import { useEffect} from 'react';

import styles from './modal.module.scss';

const Modal = ({imgAlt, imgLargeSrc, onModalClose}) => {

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => document.removeEventListener('keydown', onKeyPress);
  });

  const onKeyPress = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  const onModalOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onModalOverlayClick}>
      <img className={styles.modal} src={imgLargeSrc} alt={imgAlt} />
    </div>
  );
}
export default Modal;


