import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItemLi, ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ alt="", webformatURL, largeImageURL, loadLargeImageURL }) => {
  return(
    <ImageGalleryItemLi>
      <ImageGalleryItemImage 
        alt={alt}
        src={webformatURL}
        onClick={()=>loadLargeImageURL(largeImageURL)}
      />
    </ImageGalleryItemLi>
  )
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string,
    loadLargeImageURL: PropTypes.func.isRequired,
  }),
};

export default ImageGalleryItem;