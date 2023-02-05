import { Component } from 'react';
import Notiflix from 'notiflix';

import Api from '../../Api/Api';
import Searchbar from '../Searchbar/Searchbar';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';

class ImageFinder extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    totalHits: 0,
    largeImageURL: '',
    imgAlt: '',
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await Api(search, page);
      const { hits, totalHits } = data;
      this.setState(({ items }) => ({
        items: [...items, ...hits],
        totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSearchSubmit = search => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  handleShowModal = event => {
    const imgAlt = event.target.alt;
    const largeImageURL = event.target.srcset;
    this.setState({
      showModal: true,
      imgAlt: imgAlt,
      largeImageURL: largeImageURL,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      imgAlt: '',
      largeImageURL: '',
    });
  };

  render() {
    const {
      items,
      loading,
      error,
      totalHits,
      imgAlt,
      largeImageURL,
      showModal,
    } = this.state;
    const { handleSearchSubmit, loadMore, handleCloseModal, handleShowModal } =
      this;
    return (
      <div>
        <Searchbar onSubmit={handleSearchSubmit} />
        {items.length > 0 && (
          <ImageGallery items={items} handleShowModal={handleShowModal} />
        )}
        {error && Notiflix.Notify.failure(`${error}`)}
        {items.length > 0 && items.length < totalHits && (
          <Button loadMore={loadMore} />
        )}
        {(loading && Notiflix.Loading.pulse()) ||
          (!loading && Notiflix.Loading.remove())}
        {showModal && (
          <Modal
            imgAlt={imgAlt}
            imgLargeSrc={largeImageURL}
            onModalClose={handleCloseModal}
          />
        )}
      </div>
    );
  }
}
export default ImageFinder;
