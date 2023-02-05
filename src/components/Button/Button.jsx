import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ loadMore }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={loadMore} className={styles.button}>
        Load more
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
  loadMore: PropTypes.func,
};
