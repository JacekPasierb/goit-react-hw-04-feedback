import React from 'react';
import css from './FeedbackOptionsStyle.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.widget}>
      <div className={css.btnsWidget}>
        {options.map(option => (
          <button
            onClick={() => onLeaveFeedback(option)}
            className={`${css.btnWidget}  ${css.btnWidgetText}`}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
