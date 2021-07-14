import PropTypes from 'prop-types';

import { ImageGalleryItemLi, ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({webformatURL, alt="", largeImageURL }) => {
  return(
    <ImageGalleryItemLi>
      <ImageGalleryItemImage 
        src={webformatURL} 
        alt={alt} 
        largeImageURL={largeImageURL}/>
    </ImageGalleryItemLi>
  )
}

ImageGalleryItem.propTypes={
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
}

export default ImageGalleryItem;