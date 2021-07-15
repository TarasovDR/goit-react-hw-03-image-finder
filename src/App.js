import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Api from 'services/Api';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';

class App extends Component {
  state = {
    error: null,
    images: [],
    isLoading: false,
    selectedImage: '',
    page: 1,
    searchQuery: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
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
  };

  loadLargeImageURL = largeImageURL => {
    this.setState({ selectedImage: largeImageURL });
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

  render() {
    const { images, isLoading, selectedImage, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onSelect={this.loadLargeImageURL} />
        {images.length > 0 && <Button onClick={this.fetchImages} />}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={selectedImage} />
        )}
      </>
    );
  }
}

export default App;
