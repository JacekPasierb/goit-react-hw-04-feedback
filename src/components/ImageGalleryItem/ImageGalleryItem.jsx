import css from "../../styles.module.css";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={css.ImageGalleryItem} id={image.id} onClick={onClick}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        name={image.largeImageURL}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
