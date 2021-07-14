import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Api from 'services/Api';
// import Button from 'components/Button';
import Container from 'components/Container';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar';

class App extends Component {
  state = {
    error: null,
    images: [],
    isLoading: false,
    largeImage: '',
    page: 1,
    searchQuery: '',
    showModal: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const { searchQuery, page } = this.state;
      this.toggleLoader();

      Api.fetchImages({ searchQuery, page })
        .then(hits => {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            page: prevState.page + 1,
          }));
        })
        .catch(error => this.setState({ error: true }))
        .finally(() => this.setState(this.toggleLoader()));
    }

    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getLargeImageURL = largeImageURL => {
    this.setState({ largeImage: largeImageURL });
    this.toggleModal();
  };

  handleSubmit = value => {
    this.setState({
      images: [],
      page: 1,
      searchQuery: value,
    });
  };

  toggleLoader = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleCloseModal = () => this.setState({ selectedImage: null });
  render() {
    const { images, isLoading, largeImage, showModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onSelect={this.toggleModal} />
        {/* {images.length > 0 && <Button />} */}
        {/* {showModal && (
          <Modal
            onClick={this.toggleModal}
            largeImageURL={this.state.largeImage}
          ></Modal>
        )} */}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImage} />
        )}
      </Container>
    );
  }
}

export default App;
