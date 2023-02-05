import PropTypes from "prop-types";


import styles from './image-gallery-item.module.scss'
function ImageGalleryItem({
                            webformatURL,
                            alt,
                            largeImageURL,
                            handleShowModal,
                          }) {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        onClick={handleShowModal}
        src={webformatURL}
        srcSet={largeImageURL}
        alt={alt}
        className={styles.imageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  handleShowModal: PropTypes.func,
};
