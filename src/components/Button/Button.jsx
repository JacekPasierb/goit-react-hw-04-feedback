import css from "../../styles.module.css";
import PropTypes from "prop-types";

export const Button = ({ onClick }) => {
  return (
    <button className={css.Button} type="submit" onClick={onClick}>
      Load more
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
