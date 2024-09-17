import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement('#root');

const ImageModal = ({ isModalOpen, closeModal, targetPhoto }) => {
  return (
      
      <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={css.Overlay}
      className={css.content}
      bodyOpenClassName={css.Open}
      >
        <img src={targetPhoto.url} alt={targetPhoto.alt} className={css.Img} />
      </Modal>
  )
}

export default ImageModal