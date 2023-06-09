import css from "../../styles.module.css";
import PropTypes from "prop-types";

export const Modal = ({ src, alt, close }) => {
  return (
    <div className={css.Overlay} onClick={close}>
      <div className={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
