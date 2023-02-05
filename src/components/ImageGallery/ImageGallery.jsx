import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from './image-gallery.module.scss'
const ImageGallery = ({ items, error, handleShowModal }) =>{
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <ImageGalleryItem
      key={id}
      webformatURL={webformatURL}
      largeImageURL={largeImageURL}
      alt={tags}
      handleShowModal={handleShowModal}
    />
  ));
  return (
    <>
      
      {error && <p>Somthing goes wrong. Please try again later.</p>}
      <ul className={styles.ImageGallery}>{elements}</ul>
    </>
  );
}
export default ImageGallery

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleShowModal: PropTypes.func,
  error:PropTypes.string,
};

