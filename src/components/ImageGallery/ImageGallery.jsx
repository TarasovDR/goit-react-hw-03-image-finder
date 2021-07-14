import PropTypes from 'prop-types';

import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({images, onSelect}) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem 
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        alt={tags}
        getLargeImageURL={onSelect}
        />
      ))}
    </ImageGalleryList>
  )
}

ImageGallery.propTypes={
  images: PropTypes.array,
  onClick: PropTypes.func,
}

export default ImageGallery;