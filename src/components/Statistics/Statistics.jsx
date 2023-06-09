import React from 'react';
import css from './StatisticsStyle.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className={css.statList}>
        <li className={css.statItem}>
          <p className={css.statText}>Good:</p>
          <p className={css.statText}>{good}</p>
        </li>

        <li className={css.statItem}>
          <p className={css.statText}>Neutral: </p>
          <p className={css.statText}>{neutral}</p>
        </li>

        <li className={css.statItem}>
          <p className={css.statText}>Bad: </p>
          <p className={css.statText}>{bad}</p>
        </li>

        <li className={css.statItem}>
          <p className={css.statText}>total: </p>
          <p className={css.statText}>{total}</p>
        </li>

        <li className={css.statItem}>
          <p className={css.statText}>Positive Feedback: </p>
          <p className={css.statText}>{positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
